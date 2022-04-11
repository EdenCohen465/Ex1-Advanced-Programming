import './Message.css';
import React from 'react';

function Message({ messagesList }) {
    const chatHistory =
        messagesList.map((message, key) => {
            return (
                <div className="message" key={key} > { (message.message != "") ? (
                   <div> 
                       {(() => {
                            if(message.type == "text") {
                                return(<span className="text">{message.message}</span>);
                            } else if (message.type == "photo") {
                                if (message.public == false) {
                                    return (<img className="photoMessage rounded float-start " src={URL.createObjectURL(message.message)} alt="photo" ></img>)
                                } else {
                                    return (<img className="photoMessage rounded float-start " src={message.message} alt="photo" ></img>)
                                }
                            } else if (message.type == "video") {
                                    if (message.public == false) {
                                    return(
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