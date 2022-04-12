import './Message.css';
import React, { useEffect, useRef } from 'react'
function Message({ messagesList }) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      useEffect(() => {
        scrollToBottom()
      }, [messagesList]);
    const chatHistory =
        messagesList.map((message, key) => {
            
            return (
                <div id={key} className="message" key={key} > {(message.message != "") ? (
                    <div >
                        {(() => {
                            // display the message depends on her type.
                            if (message.type == "text") {
                                return (<span className="text">{message.message}</span>);
                            } else if (message.type == "photo") {
                                if (message.public == false) {
                                    return (<img className="photoMessage rounded float-start " src={URL.createObjectURL(message.message)} alt="photo" ></img>)
                                } else {
                                    return (<img className="photoMessage rounded float-start " src={message.message} alt="photo" ></img>)
                                }
                            } else if (message.type == "video") {
                                if (message.public == false) {
                                    return (
                                        <video className="videoMessage" controls>
                                            <source src={URL.createObjectURL(message.message)} type="video/mp4"></source>
                                        </video>
                                    );
                                } else {
                                    return (
                                        <video className="videoMessage" controls>
                                            <source src={message.message} type="video/mp4"></source>
                                        </video>
                                    );
                                }
                            } else if (message.type == "audio") {
                                if (message.public == false) {
                                    return (
                                        <audio className="audioMessage" controls >
                                            <source src={URL.createObjectURL(message.message)} type="audio/mpeg"></source>
                                        </audio>
                                    );
                                } else {
                                    return (
                                        <audio className="audioMessage" controls >
                                            <source src={message.message} type="audio/mpeg"></source>
                                        </audio>
                                    );
                                }
                            }
                        })()}
                        <span className="time">{message.time}</span>
                    </div>
                ) : ""}
                </div>
            );
        });

    return (
        <div className="chatHistory" id='chatHistory'>
            {chatHistory}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default Message;