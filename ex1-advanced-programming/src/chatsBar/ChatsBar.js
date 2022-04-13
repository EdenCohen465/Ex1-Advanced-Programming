import React from 'react';
import usersList from '../UsersList';
import { useState } from 'react';
import './ChatsBar.css'
import Chat from '../chat/Chat.js'
import FriendDetails from '../chat/FriendDetails';
import { Link } from 'react-router-dom';
import Helpers from '../chat/Helpers';
import { Col, Row, Container } from 'react-bootstrap';

function ChatsBar({ connected_user }) {
    // for the popup widow of the upload options.
    const [UploadOptionsPopup, setUploadOptionsPopup] = useState(false);
    // the next message to send.
    const [new_message, set_message] = useState({ date: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });

    // for sorting the chat by the last message.
    const sort_function = (a, b) => {
        const a_messages = usersList.get(connected_user.username).friendsMessagesHistory.get(a);
        const b_messages = usersList.get(connected_user.username).friendsMessagesHistory.get(b);

        var last_message_a_date = a_messages[a_messages.length - 1].date;
        var last_message_b_date = b_messages[b_messages.length - 1].date;

        // if it's a new message it need to be first.
        if (last_message_a_date == "") {
            return -1;
        } else if (last_message_b_date == "") {
            return -1;
        }
        // split the date by '.'
        var last_message_a_date_split = last_message_a_date.split('.');
        var last_message_b_date_split = last_message_b_date.split('.');

        // compare between the years.
        var compare = Helpers.sort(last_message_a_date_split[2], last_message_b_date_split[2]);
        if (compare != 0) {
            return compare;
        }

        // compare between the months.
        compare = Helpers.sort(last_message_a_date_split[1], last_message_b_date_split[1]);
        if (compare != 0) {
            return compare;
        }

        // compare between the days.
        compare = Helpers.sort(last_message_a_date_split[0], last_message_b_date_split[0]);
        if (compare != 0) {
            return compare;
        }
        
        var last_message_a_time = a_messages[a_messages.length - 1].time;
        var last_message_b_time = b_messages[b_messages.length - 1].time;

        var last_message_a_time_split = last_message_a_time.split(':');
        var last_message_b_time_split = last_message_b_time.split(':');

        // compare the hours.
        compare = Helpers.sort(last_message_a_time_split[0], last_message_b_time_split[0]);
        if (compare != 0) {
            return compare;
        } 

        // compare the minutes.
        compare = Helpers.sort(last_message_a_time_split[1], last_message_b_time_split[1]);
        if (compare != 0) {
            return compare;
        }

        // compare the seconds.
        compare = Helpers.sort(a_messages[a_messages.length - 1].sec, b_messages[ b_messages.length - 1].sec);
        if (compare != 0) {
            return compare;
        }

        // if it is the same time, it does no matter.
        return -1;
    };

    // chat list is initialize by the messages history of the connected user.
    const [chatsList, setList] = useState(usersList.get(connected_user.username).friendsMessagesHistory);
    const [chatsListKeys, setListKeys] = useState(Array.from(chatsList.keys()).sort(sort_function));

    const initialFriend = { username: "", nickname: "", public_photo: "", password: "", friendsMessagesHistory: "" };
    // chosen chat friend.
    const [currentFriend, setFriend] = useState(initialFriend);
    const update_sorted_keys = () => {
        setListKeys(Array.from(chatsList.keys()).sort(sort_function));
    }
    // for sowing pop up window.
    const AddContact = (e) => {
        e.preventDefault();
        setUploadOptionsPopup(false);
        document.getElementById('chatsBar').style.opacity = 0.5;
        document.getElementById('chat').style.opacity = 0.5;
        document.getElementById('popup').style.display = "block";
        set_message({ date: Helpers.getDate(), time: "", sec: "0", message: "", displayMessage: "", type: "", iSent: "" });
    }

    const handleExit = (popUp, clearVal) => {
        // dont display popup.
        document.getElementById(popUp).style.display = "none";
        document.getElementById('chatsBar').style.opacity = 1;
        document.getElementById('chat').style.opacity = 1;
        if (clearVal != '') {
            // clear the values.
            console.log(clearVal);
            console.log(document.getElementById(clearVal));
            document.getElementById(clearVal).value = '';
        }
     }
   
    const HandleAddContact = (e) => {
        e.preventDefault();
        const new_contact_username = document.getElementById('newContact').value; 
        // check if thw new contact is register to the app. 
        if (!usersList.has(new_contact_username)) {
            alert("The user didn't register!");
        // check if the contact already in the chat list.
        } else if (chatsList.has(new_contact_username)) {
            alert("The chat already exists");
        // add the new contact.
        } else {
            set_message({ date: Helpers.getDate(), time: "", message: "", displayMessage: "", type: "", iSent: "" });
            // close the popup window.
            handleExit('popup', 'newContact');
            // add to the chat list map the new contact.
            chatsList.set(new_contact_username, [{ date: "", sec: "0", time: "", message: "", displayMessage: "", type: "", iSent: true }])
            setList(chatsList);
            setListKeys(Array.from(chatsList.keys()).sort(sort_function));
            // add the friend to user history and the user to friend history.
            usersList.get(connected_user.username).friendsMessagesHistory.set(new_contact_username, [{ date: "", time: "", message: "", displayMessage: "", type: "", iSent: true }]);
            usersList.get(currentFriend.username).friendsMessagesHistory.set(connected_user.username, [{ date: "", time: "", message: "", displayMessage: "", type: "", iSent: true }]);
        }
    }

    const HandleOpenChat = (friend_details, friend_username) => {
        // update the current friend to be last friend.
        FriendDetails.lastFriend = currentFriend.username;
        FriendDetails.thisFriend = friend_username;
        if(FriendDetails.thisFriend != FriendDetails.lastFriend){
            FriendDetails.updated = false;
        }
        // update the friend to be the chosen friend.
        setFriend({ username: friend_username, nickname: friend_details.nickname, public_photo: friend_details.public_photo, password: friend_details.password, friendsMessagesHistory: friend_details.friendsMessagesHistory });
        // open chat.
        document.getElementById('chat').style.display = "block";
        setUploadOptionsPopup(false);
    }

    // check the logics of the sort!#####################################################################################################
    const Chats = chatsListKeys.map((friend_username, key) => {
        // if (usersList.has(friend_username)) {
            const friend_details = usersList.get(friend_username);
            const chat = usersList.get(connected_user.username).friendsMessagesHistory.get(friend_username);
            return (
                // open the chat with the chosen friend.
                <div key={key} className="userLine hover-style row px-z" onClick={() => { HandleOpenChat(friend_details, friend_username);}}>
                    <img src={friend_details.public_photo} className="col-4 rounded-circle images" alt="photo" ></img>
                    <div className='col-8'>
                        <Container className='nick_name_row'>
                            <Row>
                                <Col xs={7} className='nickname'>{friend_details.nickname}</Col>
                                {/** time of the last message */}
                                <Col xs={5} className='message-time'>{Helpers.timeDisplay(chat[chat.length- 1].time, chat[chat.length- 1].date)}</Col>
                            </Row>
                            {/** last message */}
                            <div className='last-message row'>{chat[chat.length - 1].displayMessage}</div>
                        </Container>
                    </div>
                </div>
            );
    });

    
    return (
        <Container fluid className='chat-bar'>
            <Row >
                <Col sm="auto">
                    <Container id="chatsBar"> 
                        <Row className="px-z userLine"> 
                            {/* Showing connected user photo */}
                            <Col xs={4}>{(connected_user.public_photo == "") ? (
                                    <img src={URL.createObjectURL(connected_user.photo)} id="images" className="col-6 rounded-circle images" alt="photo" ></img>
                                ): (
                                    <img src={connected_user.public_photo} id="images" className="col-4 rounded-circle images" alt="photo" ></img>
                                ) }
                            </Col>
                            <Col xs={8}>
                                <Container>
                                    <Row>
                                        <Col xs={8} className="nickname">{connected_user.nickname}</Col>
                                        <Col xs={2} className='add-contact-button'>
                                            {/*Add new contact*/}
                                            <button onClick={AddContact} id="new-contant-buttom" className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                                        </Col>
                                    </Row>
                                    <Row className='row'>
                                        {/*Logout option */}
                                        <Link to="/">
                                            <button className="btn btn-outline-secondary" id='logout-button' type="button">LogOut</button>
                                        </Link>
                                    </Row>                    
                                </Container>                    
                            </Col>                    
                        </Row>
                        {/*Show the chat list */}                    
                        {Chats}
                    </Container>
                    {/** new contact popup window. */}
                    <Container id="popup" className="popup">
                        <Row> 
                            <Col className="padding">Add new contact</Col>
                            <Col id="x-button">
                                <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit('popup', 'newContact')}}> </button>   
                            </Col> 
                        </Row>
                        <form className="form-floating mb3" onSubmit={HandleAddContact}>
                            <Row className="form-floating mb-3"> 
                                <input className="form-control" id="newContact" placeholder='Enter contact username' required></input>
                                <label className="identifier" htmlFor="newContact">Contact's username</label>
                            </Row>
                            <Row className="row">
                                <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                            </Row>
                        </form>
                    </Container>
                </Col>
                <Col id= "conversation">
                    <div>
                        <Chat friend={currentFriend} connected_user={connected_user} handleExit={handleExit} UploadOptionsPopup={UploadOptionsPopup} setUploadOptionsPopup={setUploadOptionsPopup} new_message={new_message} set_message={set_message} update_sorted_keys={update_sorted_keys}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default ChatsBar;