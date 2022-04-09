import './Message.css';
import React from 'react';

function DisplayMessage(message) {
    if (message.type == "text") {
        return (<span className="text">{message.m}</span>);
    } else if (message.type == "photo") {
        return (<img className="photoMessage rounded float-start " src={URL.createObjectURL(message.m)} alt="photo" ></img>);
    } else if (message.type == "video") {
        return (<video>
            <source src={message.m} type="video/*"></source>
        </video>);
    } // else voice
}

function Message({ messagesList }) {
    const chatHistory =
        messagesList.map((message, key) => {
            return (
                <div className="message" key={key} > { (message.m != "") ? (
                   <div> 
                       {(() => {
                            if(message.type == "text") {
                                return(<span className="text">{message.m}</span>);
                            } else if (message.type == "photo") {
                                return(<img className="photoMessage rounded float-start " src={URL.createObjectURL(message.m)} alt="photo" ></img>)
                            } else if (message.type == "video") {
                                return(
                                    <video className="videoMessage" controls>
                                    <source src={URL.createObjectURL(message.m)} type="video/mp4"></source>
                                </video>);
                            }
                        })()}
                        <span className="time">{message.time}</span>
                    </div>
                ) : ""}
                </div>
            );
        });

    return (
        <div>
            <div>
                <div className="chatHistory">
                    {chatHistory}
                </div>
            </div>

        </div>
    );
}

export default Message;