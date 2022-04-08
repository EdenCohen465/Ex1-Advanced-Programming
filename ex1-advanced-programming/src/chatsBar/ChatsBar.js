import React from 'react';
import chatsListDefault from './ChatsList'
import { useState } from 'react';
import sunset from '../userPhotos/sunset.jpg';
import './ChatsBar.css'



function ChatsBar({ user }) {
    const [chatsList, setList] = useState(chatsListDefault);
    const [friend, setFriend] = useState('');

    const AddContact = e => {
        e.preventDefault();
        document.getElementById('chatsBar').style.opacity = 0.5;
        document.getElementById('popup').style.opacity = 1;
        document.getElementById('popup').style.display = "block";
    }

    const handleExit = () => {
        document.getElementById('popup').style.display = "none";
        document.getElementById('chatsBar').style.opacity = 1;
        document.getElementById('newContact').value = '';
     }

    const HandleAddContact = e => {
        e.preventDefault();
        handleExit();
        const user = document.getElementById('newContact').value;

        // what photo?#########################################################################################################
        const newEl = {nickname: user, photo: sunset , lastMessage: "", lastMessageTime: "", messagesHistory: []};
        setList([newEl, ...chatsList]);
    }

    const HandleOpenChat = (friend) => {
        //e.preventDefault();
        setFriend(friend);
        document.getElementById('chat').style.display = "block";
    }

    const chats = chatsList.map((chat, key) => {
        return (
            <div key={key} className='row px-z' >
                <div className="userLine" onClick={() => {HandleOpenChat(chat);}}>
                    <img src={chat.photo} className="col-4 rounded-circle images" alt="photo" ></img>
                    <span className='nickname col-4'>{chat.nickname}</span>
                    <span className='minAgo col-4'>{chat.lastMessageTime} minutes ago</span>
                    <div>{chat.lastMessage}</div>
                </div>
            </div>
        );
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
                            <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={handleExit}> </button>   
                        </div> 
                    </div>
                    <form className="form-floating mb3" onSubmit={HandleAddContact}>
                        <div className="form-floating mb-3 row"> 
                            <input className="form-control" id="newContact" placeholder='Enter contact username' required></input>
                            <label className="identifier" for="newContact">Contact's identifier</label>
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="chat" className='col'>
                <div>
                    <div> hey {friend.nickname}</div>
                </div>
            </div>
        </div>
    );
}
export default ChatsBar;