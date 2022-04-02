import React from 'react';
import chatsListDefault from './ChatsList'
import { useState } from 'react';
import sunset from '../userPhotos/sunset.jpg';
import './ChatsBar.css'


function ChatsBar({ user }) {
    const [chatsList, setList] = useState(chatsListDefault);
    console.log(chatsList);
    const AddContact = e => {
        e.preventDefault();
        document.getElementById('chatsBar').style.opacity = 0.5;
        document.getElementById('popup').style.opacity = 1;
        document.getElementById('popup').style.display = "block";
    }

    const HandleAddContact = e => {
        e.preventDefault();
        document.getElementById('chatsBar').style.opacity = 1;
        document.getElementById('popup').style.display = "none";
        const user = document.getElementById('newContact').value;
        document.getElementById('newContact').value = '';

        // what photo?#########################################################################################################
        const newEl = {nickname: user, photo: sunset , lastMessage: "", lastMessageTime: "", messagesHistory: []};
        setList([newEl, ...chatsList]);
        console.log(chatsList);

    }

    const chats = chatsList.map((chat, key) => {
        return (
            <div key={key}>
                <div className="userLine">
                    <img src={chat.photo} className="border border-1 rounded-circle images" alt="photo" ></img>
                    <span className='nickname'>{chat.nickname}</span>
                    <span className='minAgo'>{chat.lastMessageTime} minutes ago</span>
                    <div>{chat.lastMessage}</div>
                </div>
            </div>
        );
    });

    return (
        <div >
            <div id="chatsBar">
                <div className="userLine">
                <img src={user.photo} className="rounded-circle images" alt="photo" ></img>
                <span className="nickname">{user.nickname}</span>
                <button onClick={AddContact} className="bi bi-person-plus-fill btn btn-outline-secondary"></button>
                </div>
                {chats}
            </div>
            <div id="popup" className="popup">
                <div>Add new contact</div>
                <form className="form-floating mb3" onSubmit={HandleAddContact}>
                    <div className="form-floating mb-3"> 
                        <input className="form-control" id="newContact" placeholder='Enter contact username' required></input>
                        <label for="newContact">Contact's identifier</label>
                    </div>
                    <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}
export default ChatsBar;