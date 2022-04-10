import React from 'react';
import usersList from '../UsersList';
import { useState } from 'react';
import './ChatsBar.css'
import Chat from '../chat/Chat.js'
import FriendDetails from '../chat/FriendDetails';

function ChatsBar({ user }) {
    const [chatsList, setList] = useState(user.friendsMessagesHistory);
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
    const findUser = (chat) => {
        var foundedUser = null;
        usersList.map((user) => {
            if (user.username == chat.username) {
                foundedUser = user;
            }
        });
        console.log(foundedUser);
        return foundedUser;
    }
    
    const findChat = (chat) => {
        var foundedUser = null;
        chatsList.map((user) => {
            if (user.username == chat.username) {
                foundedUser = user;
            }
        });
        return foundedUser;
    }

    const isUserNameExist = (chat) => {
        var foundedUser = null;
        usersList.map((user) => {
            if (user.username == chat) {
                foundedUser = user;
            }
        });
        return foundedUser;
    }
    const HandleAddContact = (e) => {
        e.preventDefault();
        const newChat = isUserNameExist(document.getElementById('newContact').value);
        console.log(newChat);
        if (newChat == null) {
            alert("The user didn't register!");
        } else if (findChat(newChat) != null) {
            alert("The chat already exists");
        } else {
            handleExit('popup', 'newContact');
            // what photo?#########################################################################################################
            const newEl = { username: newChat.username, messagesHistory: [{ time: "", m: "", type:"" }]};
            setList([newEl, ...chatsList]);
            user.friendsMessagesHistory = [newEl, ...chatsList];

            const addMeToNewContact = { username: user.username, messagesHistory: [{ time: "", m: "", type:"" }]};
            newChat.friendsMessagesHistory = [addMeToNewContact, ...newChat.friendsMessagesHistory];
        }
    }

    const HandleOpenChat = (friend) => {
        //e.preventDefault();
        // update the current friend to be last friend.
        FriendDetails.lastFriend = currentFriend;
        // update this friend.
        FriendDetails.thisFriend = friend;
        if(FriendDetails.thisFriend.username != FriendDetails.lastFriend.username){
            FriendDetails.updated = false;
        }
        setFriend(friend);
        document.getElementById('chat').style.display = "block";
    }

   

    const chats = chatsList.map((chat, key) => {
        var userFriend = findUser(chat);
        console.log(userFriend);
        if (userFriend != null) {
            return (
                <div key={key} className='row px-z' >
                    <div className="userLine" onClick={() => { HandleOpenChat(userFriend);}}>
                        <img src={userFriend.public_photo} className="col-4 rounded-circle images" alt="photo" ></img>
                        <span className='nickname col-4'>{userFriend.nickname}</span>
                        <span className='minAgo col-4'>{chat.messagesHistory[chat.messagesHistory.length - 1].time}</span>
                        <div>{chat.messagesHistory[chat.messagesHistory.length - 1].displayMessage}</div>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className='container row'>
            <div className="col">
                <div id="chatsBar" className='container'> {(user.public_photo == "") ? (
                    <div className="row userLine ">
                        <img src={URL.createObjectURL(user.photo)} id="user-image" className="col-6 rounded-circle images" alt="photo" ></img>
                        <span className="nickname col-6">{user.nickname}</span>
                        <span className='col-2 '>
                            <button onClick={AddContact} id="new-contant-buttom" className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                        </span>
                    </div>
                    ): (
                    <div className ="row userLine">
                            <img src={user.public_photo} id="user-image" className="col-6 rounded-circle images" alt="photo" ></img>
                        <span className="col-6 nickname">{user.nickname}</span>
                        <span className='col-2'>
                            <button onClick={AddContact} className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                        </span>

                    </div>
                    )
                }
                    {chats}
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
                    <Chat friend={currentFriend} user={user} handleExit={handleExit}/>
                </div>
            </div>
        </div>
    );
}
export default ChatsBar;