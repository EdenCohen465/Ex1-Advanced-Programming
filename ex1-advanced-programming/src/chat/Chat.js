import './Chat.css';
import UploadOptions from './uploadOptions/UploadOptions';
import Message from './Message';
import { useState} from 'react';
import FriendDetails from './FriendDetails';
import usersList from '../UsersList';
import Record from './record/Record';
import Helpers from './Helpers';
import { Container, Row, Col } from 'react-bootstrap';
var friend_messages_history = null;


function InitialChat({ setList, friend, connected_user }) {
    // when the chat is open, set the list in order to show the messages history, only if we changed friend.
    // and if it not already updeted.
    if (FriendDetails.updated == false && friend.username != "" && FriendDetails.thisFriend != '' && FriendDetails.lastFriend != FriendDetails.thisFriend) {
        // get the history messages of the connected user with the chosen friend.
        setList(usersList.get(connected_user.username).friendsMessagesHistory.get(friend.username));
        friend_messages_history = friend.friendsMessagesHistory.get(connected_user.username);
        // message history updated.
        FriendDetails.updated = true;
    }
}

function Chat({ friend, handleExit, connected_user, UploadOptionsPopup, setUploadOptionsPopup, new_message, set_message, update_sorted_keys }) {
    // messages list.
    const [messagesList,  setMessageList] = useState([]);
    // popup microphone window.
    const [useMicrophone, setUseMicrophone] = useState(false);

    // send the message.
    const HandleAddMessage = function (e) {
        e.preventDefault();
        // close the popup windows of michrophone and upload options.
        setUseMicrophone(false);
        setUploadOptionsPopup(false);
        
        // if the message is not empty, send it.
        if (new_message.message != "")  {
            const newList = [...messagesList, new_message];
            // update the list with the new message.
            setMessageList(newList);
            // append the new message to the user history with the current friend.
            usersList.get(connected_user.username).friendsMessagesHistory.set(friend.username, newList);
            // append the new message to the friend history with the connected user.
            var new_message_friend = {...new_message, iSent: false};
            if (friend_messages_history != null) {
                friend_messages_history = [...friend_messages_history, new_message_friend];
            } else {
                friend_messages_history = [new_message_friend];
            }
            usersList.get(friend.username).friendsMessagesHistory.set(connected_user.username, friend_messages_history);
            update_sorted_keys();
            // in order to clear the input box.
            set_message({ date: "", sec: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });
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
    
    // handle upload image, video and audio functions
    const inputs = [
        { id: "selectPhoto", val: "Upload an image", type: "image", clearVal: "imageUpload"},
        { id: "selectVideo", val: "Upload a video", type: "video", clearVal: "videoUpload" },
        { id: "selectAudio", val: "Upload an audio", type: "audio", clearVal: "audioUpload" }
    ];
    // get the first file from the input.
    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    var video = null;
    const videoHandler = (e) => {
        video = e.target.files[0];
    }

    var audio = null;
    const audioHandler = (e) => {
        audio = e.target.files[0];
    }

    // upload pictre, video or audio.
    const HandleUpload = (e, input) => {
        e.preventDefault();
        const today = new Date();
        const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
        // set the messages depends of the id- photo, video or audio.
        if (input.id == "selectPhoto") {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: URL.createObjectURL(photo), displayMessage: "photo", type: "photo", iSent: true });
            HandleAddMessage(e);
        } else if(input.id =="selectVideo") {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: URL.createObjectURL(video), displayMessage: "video", type: "video", iSent: true });
            HandleAddMessage(e);
        } else {
            set_message({ date: Helpers.getDate(), sec: today.getSeconds(), time: time, message: URL.createObjectURL(audio), displayMessage: "audio", type: "audio", iSent: true });
            HandleAddMessage(e);
        }
        // close the popup window.
        handleExit(input.id, input.clearVal);
    }

    const HandleSubmitImageOrVideo= (e, input) => {
        HandleUpload(e, input);
        // close the popup window.
        setUploadOptionsPopup(false);
    }

    // return input tag depends on the required type.
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
            <Container key={key} id={input.id} className="UploadOptions">
                <Row>
                    <Col xs={10} className="padding">{input.val}</Col>
                    <Col xs={2} id="x-button">
                        <button className="button bi bi-x-circle btn btn-outline-secondary" onClick={() => { handleExit(input.id, input.clearVal) }}> </button>
                    </Col>
                </Row>
                {/** when submiting the form, call the function that deals with the upload. */}
                <form className="form-floating mb3" onSubmit={(e) => HandleSubmitImageOrVideo(e, input)}>
                    <Row className="form-floating mb-3"> 
                    {/** show the options upload */}
                        {HandleOptions(input, key)}
                    </Row>
                    <Row>
                        <button className="btn btn-outline-secondary addContact" id="addContact" type="submit">Add</button>
                    </Row>
                </form>
            </Container>
        );
    });
    
    
    return (
        <div>
            <div id="chat">
                <div className="header">
                    {/** Show friend details */}
                    <span><img src={friend.photo} alt="photo" className="border border-1 rounded-circle images"></img></span>
                    <h3>Chat with {friend.nickname}</h3>
                </div>
                {/**initial the messagesList- by the history messages. */}
                <InitialChat connected_user={connected_user} friend={friend} setList={setMessageList}/>
                {/**show the messages list */}
                <div className="chatBody"><Message messagesList={messagesList} /></div>
                <div className="toolBar">
                    <button className="bi bi-link-45deg hover-style" onClick={()=> {setUploadOptionsPopup(true)
                        set_message({ date: "", sec: "", time: "", message: "", displayMessage: "", type: "", iSent: "" });
                    }}></button>
                    <div><UploadOptions trigger={UploadOptionsPopup} setUploadOptionsPopup={setUploadOptionsPopup}></UploadOptions></div>
                    {/**Send text message */}
                    <form>
                        <input id="newM" placeholder='Write your message' type="text" onChange={HandleChangeMessage}
                            value={new_message.displayMessage} onKeyPress={HandleSendMessage} onClick={()=>{setUploadOptionsPopup(false); setUseMicrophone(false)}}/>
                        <button className="button_option bi bi-mic hover-style" onClick={(e)=>{e.preventDefault(); setUseMicrophone(!useMicrophone)}}></button>
                        {/** Record Option */}
                        <div className='microphone'><Record trigger={useMicrophone} setUseMicrophone={setUseMicrophone} set_message={set_message} HandleAddMessage={HandleAddMessage}/></div>
                        <button className="button_option bi bi-envelope hover-style" onClick={HandleAddMessage} type="submit"></button>
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
