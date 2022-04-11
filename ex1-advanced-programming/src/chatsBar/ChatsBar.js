import React from 'react';
import usersList from '../UsersList';
import { useState } from 'react';
import './ChatsBar.css'
import Chat from '../chat/Chat.js'
import FriendDetails from '../chat/FriendDetails';

function ChatsBar({ connected_user }) {
    const [chatsList, setList] = useState(usersList.get(connected_user.username).friendsMessagesHistory);
    const initialFriend = { username: "", nickname: "", public_photo: "", password: "", friendsMessagesHistory: "" };
    const [currentFriend, setFriend] = useState(initialFriend);

    const AddContact = (e) => {
        e.preventDefault();
        document.getElementById('chatsBar').style.opacity = 0.5;
        document.getElementById('chat').style.opacity = 0.5;
        document.getElementById('popup').style.display = "block";
    }

    const handleExit = (popUp, clearVal) => {
        document.getElementById(popUp).style.display = "none";
        document.getElementById('chatsBar').style.opacity = 1;
        document.getElementById('chat').style.opacity = 1;
        if (clearVal != '') {
            document.getElementById(clearVal).value = '';
        }
     }
   
    const HandleAddContact = (e) => {
        e.preventDefault();
        const new_contact_username = document.getElementById('newContact').value; 
        if (!usersList.has(new_contact_username)) {
            alert("The user didn't register!");
        } else if (chatsList.has(new_contact_username)) {
            alert("The chat already exists");
        } else {
            handleExit('popup', 'newContact');
            chatsList.set(new_contact_username, [])
            setList(chatsList);
            console.log(chatsList);
            usersList.get(connected_user.username).friendsMessagesHistory.set(new_contact_username, []);
            usersList.get(currentFriend).friendsMessagesHistory.set(connected_user.username, []);
        }
    }

    const HandleOpenChat = (friend_details, friend_username) => {
        // update the current friend to be last friend.
        FriendDetails.lastFriend = currentFriend.username;
        FriendDetails.thisFriend = friend_username;
        if(FriendDetails.thisFriend != FriendDetails.lastFriend){
            FriendDetails.updated = false;
        }
        setFriend({ username: friend_username, nickname: friend_details.nickname, public_photo: friend_details.public_photo, password: friend_details.password, friendsMessagesHistory: friend_details.friendsMessagesHistory });
        document.getElementById('chat').style.display = "block";
    }

    const Chats = Array.from(chatsList.keys()).map((friend_username, key) => {
        // if (usersList.has(friend_username)) {
            const friend_details = usersList.get(friend_username);
            const chat = usersList.get(connected_user.username).friendsMessagesHistory.get(friend_username);
            return (
                <div key={key} className='row px-z' >
                    <div className="userLine" onClick={() => { HandleOpenChat(friend_details, friend_username);}}>
                        <img src={friend_details.public_photo} className="col-4 rounded-circle images" alt="photo" ></img>
                        <span className='nickname col-4'>{friend_details.nickname}</span>
                        <span className='minAgo col-4'>{chat[chat.length - 1].time}</span>
                        <div>{chat[chat.length - 1].displayMessage}</div>
                    </div>
                </div>
            );
    });

    
    return (
        <div className='container row'>
            <div className="col">
                <div id="chatsBar" className='container'> {(connected_user.public_photo == "") ? (
                    <div className="row userLine ">
                        <img src={URL.createObjectURL(connected_user.photo)} id="user-image" className="col-6 rounded-circle images" alt="photo" ></img>
                        <span className="nickname col-6">{connected_user.nickname}</span>
                        <span className='col-2 '>
                            <button onClick={AddContact} id="new-contant-buttom" className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                        </span>
                    </div>
                    ): (
                    <div className ="row userLine">
                            <img src={connected_user.public_photo} id="user-image" className="col-6 rounded-circle images" alt="photo" ></img>
                            <span className="col-6 nickname">{connected_user.nickname}</span>
                        <span className='col-2'>
                            <button onClick={AddContact} className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                        </span>
                    </div>
                    )
                }
                {Chats}
                </div>
                <div id="popup" className="popup container">
                    <div className="row"> 
                        <div className="col-10 padding">Add new contact</div>
                        <div id="x-button" className='col-2'>
                            <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit('popup', 'newContact')}}> </button>   
                        </div> 
                    </div>
                    <form className="form-floating mb3" onSubmit={HandleAddContact}>
                        <div className="form-floating mb-3 row"> 
                            <input className="form-control" id="newContact" placeholder='Enter contact username' required></input>
                            <label className="identifier" for="newContact">Contact's username</label>
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="chat" className='col'>
                <div>
                    <Chat friend={currentFriend} connected_user={connected_user} handleExit={handleExit}/>
                </div>
            </div>
        </div>
    );
}
export default ChatsBar;