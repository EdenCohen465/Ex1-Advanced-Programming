import React from 'react';
import chatsListDefault from './ChatsList'
import { useState } from 'react';
import sunset from '../userPhotos/sunset.jpg';
import './ChatsBar.css'
import Chat from '../chat/Chat'

function ChatsBar({ user }) {
    const [chatsList, setList] = useState(chatsListDefault);
    const initialFriend = {
        nickname: "", photo: "", messagesHistory: [{ time: "", m: "" }]};
    const [friend, setFriend] = useState(initialFriend);

    const AddContact = e => {
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

    const HandleAddContact = e => {
        e.preventDefault();
        const user = document.getElementById('newContact').value;
        handleExit();
        // what photo?#########################################################################################################
        const newEl = { nickname: user, photo: sunset, messagesHistory: [{ time: "", m: "" }]};
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
                    <span className='minAgo col-4'>{chat.messagesHistory[chat.messagesHistory.length - 1].time}</span>
                    <div>{chat.messagesHistory[chat.messagesHistory.length - 1].m}</div>
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
                            <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit('popup', 'newContact')}}> </button>   
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
                    <Chat friend={friend} handleExit={handleExit}/>
                </div>
            </div>
        </div>
    );
}
export default ChatsBar;