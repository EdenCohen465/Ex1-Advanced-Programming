import './Chat.css';
import UploadOptions from './uploadOptions/UploadOptions';
import Message from './Message';
import { useState, useRef, useEffect} from 'react';
import FriendDetails from './FriendDetails';
import usersList from '../UsersList';
import Record from './record/Record';
import Helpers from './Helpers';
var friend_messages_history = [];

function InitialChat(props) {
    // when the char is opened, set the list in order to show the message history, only if we changed friend.
    // and if it not already updeted.
    if (FriendDetails.updated == false && props.friend.username != "" && FriendDetails.thisFriend != '' && FriendDetails.lastFriend != FriendDetails.thisFriend) {
        // get the history messages of the connected user with the chosen friend.
        props.setMessageList(usersList.get(props.connected_user.username).friendsMessagesHistory.get(props.friend.username));
        friend_messages_history = props.friend.friendsMessagesHistory.get(props.connected_user.username);
        // message history updated.
        FriendDetails.updated = true;
    }
}

function Chat({ friend, handleExit, connected_user, UploadOptionsPopup, setUploadOptionsPopup, new_message, set_message, update_sorted_keys }) {
    // messages list.
    const [messagesList, setList] = useState([]);
    // popup microphone window.
    const [useMicrophone, setUseMicrophone] = useState(false);

    // send the message.
    const HandleAddMessage = function (e) {
        e.preventDefault();
        // close the popup windows of michrophone and upload options.
        setUseMicrophone(false);
        setUploadOptionsPopup(false);
        
        // if the message is not empty, send it.
        if (new_message.message != "") {
            set_message({ date: Helpers.getDate(), sec: "0", time: "", message: "", displayMessage: "", type: "", iSent: "" });
            update_sorted_keys();
            const newList = [...messagesList, new_message];
            // update the list with the new message.
            setMessageList(newList);
            // append the new message to the user history with the current friend.
            usersList.get(connected_user.username).friendsMessagesHistory.set(friend.username, newList);
            // append the new message to the friend history with the connected user.
            var new_message_friend = {...new_message, iSent: false};
            friend_messages_history = [...friend_messages_history, new_message_friend];
            usersList.get(friend.username).friendsMessagesHistory.set(connected_user.username, friend_messages_history);
            // in order to clear the input box.
            
        }
    }

  
    const HandleChangeMessage= e => {
        const today = new Date();
        const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
        // create message
        set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: e.target.value, displayMessage: e.target.value, type: "text", iSent: true });
    }
    
    // send the message if the user pressed Enter key.
    const HandleSendMessage = (e) => {
        if (e.key === "Enter") {
            HandleAddMessage(e);
        }
    }
    
    // handle upload inmage and videos functions #################################################################
    const inputs = [
        { id: "selectPhoto", val: "Upload an image", type: "image", clearVal: "imageUpload"},
        { id: "selectVideo", val: "Upload a video", type: "video", clearVal: "videoUpload" },
        { id: "selectAudio", val: "Upload an audio", type: "audio", clearVal: "audioUpload" }
    ];

    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    var video = null;
    const videoHandler = (e) => {
        video = e.target.files[0];
        console.log(video);
    }

    var audio = null;
    const audioHandler = (e) => {
        audio = e.target.files[0];
        console.log(audio);
    }

    // upload pictre, video or audio.
    const HandleUpload = (e, input) => {
        e.preventDefault();
        const today = new Date();
        const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
        // set the messages depends of the id.
        if (input.id == "selectPhoto") {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: photo, displayMessage: "photo", type: "photo", public: false, iSent: true });
            HandleAddMessage(e);
        } else if(input.id =="selectVideo") {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: video, displayMessage: "video", type: "video", public: false, iSent: true });
            HandleAddMessage(e);
        }
        else {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: audio, displayMessage: "audio", type: "audio", public: false, iSent: true });
            HandleAddMessage(e);
        }
        handleExit(input.id, input.clearVal);
    }

    const HandleSubmitImageOrVideo= (e, input) => {
        HandleUpload(e, input);
        // close the popup window.
        setUploadOptionsPopup(false);
    }
    // return input depends on the input type.
    const HandleOptions = (input, key)=> {
        if (input.type == "image"){
            return(<input className="form-control form-control-sm" id={input.clearVal} type="file" accept="image/*" onChange={photoHandler} required></input>);
        }
        else if (input.type == "video") {
            return (<input className="form-control form-control-sm" id={input.clearVal} type="file" accept="video/*" onChange={videoHandler} required></input>);
        }
        else if (input.type == "audio") {
            return (<input className="form-control form-control-sm" id={input.clearVal} type="file" accept="audio/*" onChange={audioHandler} required></input>);
        }
    }
    // show upload window.
    const uploadTags = inputs.map((input, key) => {
        return (
            <div key={key} id={input.id} className="container UploadOptions">
                <div className="row">
                    <div className="col-10 padding">{input.val}</div>
                    <div id="x-button" className='col-2'>
                        <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit(input.id, input.clearVal) }}> </button>
                    </div>
                </div>
                <form className="form-floating mb3" onSubmit={(e) => HandleSubmitImageOrVideo(e, input)}>
                    <div className="form-floating mb-3 row "> 
                    {/* {(input.type == "image") ? (
                        <input className="form-control form-control-sm" id="imageUpload formFileSm" type="file" accept="image/*" onChange={photoHandler} required></input>
                    ) : (
                            <input className="form-control form-control-sm" id="videoUpload formFileSm" type="file" accept="video/*" onChange={videoHandler} required></input>
                    )} */}
                    {HandleOptions(input, key)}
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-secondary" id="addContact" type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    });
    //#############################################################################################################

    return (
        <div>
            <div id="chat">
                <div className="header">
                    {/** Show friend details */}
                    <span><img src={friend.public_photo} alt="photo" className="border border-1 rounded-circle images"></img></span>
                    <h3>Chat with {friend.nickname}</h3>
                </div>
                {/**initial the messagesList- by the history messages. */}
                <InitialChat connected_user={connected_user} friend={friend} setMessageList={setMessageList}/>
                {/**show the messages list */}
                <div className="chatBody" id="chatBody"><Message messagesList={messagesList} /></div>
                <div className="toolBar">
                    <button className="bi bi-link-45deg hover-style" onClick={()=> {setUploadOptionsPopup(true)
                        set_message({ date: Helpers.getDate(), sec: "0", time: "", message: "", displayMessage: "", type: "", iSent: "" });
                    }}></button>
                    <div><UploadOptions trigger={UploadOptionsPopup} setUploadOptionsPopup={setUploadOptionsPopup}></UploadOptions></div>
                    {/**Send text message */}
                    <form>
                        <input id="newM" placeholder='Write your message' type="text" onChange={HandleChangeMessage}
                            value={new_message.displayMessage} onKeyPress={HandleSendMessage} onClick={()=>{setUploadOptionsPopup(false); setUseMicrophone(false)}}/>
                        <button className="button_option bi bi-mic hover-style" onClick={(e)=>{e.preventDefault(); setUseMicrophone(!useMicrophone)}}></button>
                        <div className='microphone'><Record trigger={useMicrophone} setUseMicrophone={setUseMicrophone} set_message={set_message} HandleAddMessage={HandleAddMessage}/></div>
                        <button className="button_option bi bi-envelope hover-style" onClick={HandleAddMessage} type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div>
                {uploadTags}
            </div>
        </div>
    );

}

export default Chat;
