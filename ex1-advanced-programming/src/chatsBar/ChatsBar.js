import React from 'react';
import usersList from '../UsersList';
import { useState, useEffect, useNavigate } from 'react';
import './ChatsBar.css'
import Chat from '../chat/Chat.js'
import FriendDetails from '../chat/FriendDetails';
import { Link } from 'react-router-dom';
import Helpers from '../chat/Helpers';
import { Col, Row, Container } from 'react-bootstrap';

function ChatsBar({ connected_user }) {

    // display the title on the tab.
    useEffect(() => {
        document.title = `${connected_user.nickname}'s chat`;
      }, []);

    // for the popup widow of the upload options.
    const [UploadOptionsPopup, setUploadOptionsPopup] = useState(false);
    // the next message to send.
    const [new_message, set_message] = useState({ date: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });

    // compare function in order to sort the chat by the last message.
    const sort_function = (a, b) => {
        // get the messages history of both users a,b with the connected_user.
        const a_messages = usersList.get(connected_user.username).friendsMessagesHistory.get(a);
        const b_messages = usersList.get(connected_user.username).friendsMessagesHistory.get(b);

        // the last message dates of both users.
        var last_message_a_date = a_messages[a_messages.length - 1].date;
        var last_message_b_date = b_messages[b_messages.length - 1].date;

        // if it's a new message it need to be first.
        if (last_message_a_date == "") {
            return -1;
        } else if (last_message_b_date == "") {
            return 1;
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
        
        // the last message time of both users.
        var last_message_a_time = a_messages[a_messages.length - 1].time;
        var last_message_b_time = b_messages[b_messages.length - 1].time;

        // split by ':'
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
        compare = Helpers.sort(a_messages[a_messages.length - 1].sec, b_messages[b_messages.length - 1].sec);
        if (compare != 0) {
            return compare;
        }

        // if it is the same time, it does no matter.
        return -1;
    };

    // chatsList is initialize by the messages history of the connected user.
    const [chatsList, setList] = useState(usersList.get(connected_user.username).friendsMessagesHistory);
    // chatsListKeys is the keys-usernames of the messages history of the connected user in a sorted way by the sort function.
    const [chatsListKeys, setListKeys] = useState(Array.from(chatsList.keys()).sort(sort_function));
    // currentFriend is the frieds that his chat was chosen.
    const initialFriend = { username: "", nickname: "", photo: "", password: "", friendsMessagesHistory: "" };
    const [currentFriend, setFriend] = useState(initialFriend);

    // the function update the sorted keys.
    const update_sorted_keys = () => {
        const array = Array.from(chatsList.keys()).sort(sort_function);
        setListKeys(array);
    }

    // the function hadle the action tap on the add contact button.
    const AddContact = (e) => {
        // prevent refresh of the page.
        e.preventDefault();
        // stop showing the popup window.
        setUploadOptionsPopup(false);
        
        // show the element of Id-popup, make the chat and chatsBar dim.
        document.getElementById('chatsBar').style.opacity = 0.5;
        document.getElementById('chat').style.opacity = 0.5;
        document.getElementById('popup').style.display = "block";
        // remove the last message written.
        set_message({ date: Helpers.getDate(), time: "", sec: "0", message: "", displayMessage: "", type: "", iSent: "" });
    }


    // the function hadle the actin of adding a contact.
    const HandleAddContact = (e) => {
        // prevent refresh of the page.
        e.preventDefault();
        // pull the username that was entered in the pop up window.
        const new_contact_username = document.getElementById('newContact').value;
        // check if thw new contact is register to the app. 
        if (!usersList.has(new_contact_username)) {
            alert("The user didn't register!");
        // check if the contact already in the chat list.
        } else if (chatsList.has(new_contact_username)) {
            alert("The chat already exists");
        // else, add the chat with the new contact.
        } else {
            // close the popup window.
            handleExit('popup', 'newContact');
            // add to the chatslist map the new contact.
            chatsList.set(new_contact_username, [{ date: "", sec: "", time: "", message: "", displayMessage: "", type: "", iSent: true }])
            setList(chatsList);
            // update the sorted keys.
            update_sorted_keys();
            // add the friend to user history and the user to friend history.
            usersList.get(connected_user.username).friendsMessagesHistory.set(new_contact_username, [{ date: "", time: "", message: "", displayMessage: "", type: "", iSent: true }]);
            usersList.get(new_contact_username).friendsMessagesHistory.set(connected_user.username, [{ date: "", time: "", message: "", displayMessage: "", type: "", iSent: true }]);
            set_message({ date: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });
        }
    }

    // the function close the popup window.
    const handleExit = (popUp, clearVal) => {
        // don't display popup.
        document.getElementById(popUp).style.display = "none";
        document.getElementById('chatsBar').style.opacity = 1;
        document.getElementById('chat').style.opacity = 1;
        if (clearVal != '') {
            // clear the values.
            document.getElementById(clearVal).value = '';
        }
     }

     // the function hadle a tap on a chat in the chatsBar.
    const HandleOpenChat = (friend_details, friend_username) => {
        // update the current friend to be last friend.
        FriendDetails.lastFriend = currentFriend.username;
        FriendDetails.thisFriend = friend_username;
        // if it is a different friends the chat is not updated.
        if(FriendDetails.thisFriend != FriendDetails.lastFriend){
            FriendDetails.updated = false;
        }
        // update the friend to be the chosen friend.
        setFriend({ username: friend_username, nickname: friend_details.nickname, photo: friend_details.photo, password: friend_details.password, friendsMessagesHistory: friend_details.friendsMessagesHistory });
        // open chat.
        document.getElementById('chat').style.display = "block";
        setUploadOptionsPopup(false);
        set_message({ date: "", sec: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });
    }

    // moving on all the usernames that are talking to the current username and return the html that show them in the chatsBar.
    const Chats = chatsListKeys.map((friend_username, key) => {
        // get the detailes of the current friend from the usersList.
        const friend_details = usersList.get(friend_username);
        // get the messages history of the friend with the current user.
        const chat = usersList.get(connected_user.username).friendsMessagesHistory.get(friend_username);
        return (
            // open the chat with the chosen friend.
            <div key={key} className="userLine hover-style row px-z" onClick={() => { HandleOpenChat(friend_details, friend_username);}}>
                {/** friend photo */}
                <img src={friend_details.photo} className="col-4 rounded-circle images" alt="photo" ></img>
                <div className='col-8'>
                    <Container className='nick_name_row'>
                        <Row>
                            {/** friend nickname */}
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

    // return the general html of the chatsBar- the left side.
    return (
        <Container fluid className='chat-bar'>
            <Row >
                <Col sm="auto">
                    <Container id="chatsBar"> 
                        <Row className="px-z userLine"> 
                            {/* Showing connected user photo */}
                            <Col xs={4}>
                                    <img src={connected_user.photo} id="images" className="col-4 rounded-circle images" alt="photo" ></img>
                            </Col>
                            <Col xs={8}>
                                <Container>
                                    <Row>
                                        {/* Showing connected user nickname */}
                                        <Col xs={8} className="nickname">{connected_user.nickname}</Col>
                                        <Col xs={2} className='add-contact-button'>
                                            {/*Add new contact button*/}
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
                        
                        {/*Show the chatslist */}                    
                        {Chats}                      
                    </Container>
                    {/** add new contact popup window. */}
                    <Container id="popup" className="UploadOptions">
                        <Row> 
                            <Col xs={10} className="padding">Add new contact</Col>
                            <Col xs={2} id="x-button">
                                <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit('popup', 'newContact')}}> </button>   
                            </Col> 
                        </Row>
                        <form className="form-floating mb3" onSubmit={HandleAddContact}>
                            <Row className="form-floating mb-3"> 
                                <input className="form-control" id="newContact" placeholder='Enter contact username' required></input>
                                <label className="identifier" htmlFor="newContact">Contact's username</label>
                            </Row>
                            <Row className="row">
                                <button className="btn btn-outline-secondary addContact" id="addContact" type="submit">Add</button>
                            </Row>
                        </form>
                    </Container>
                </Col>
                {/* the current chat that was tapped on. */}
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