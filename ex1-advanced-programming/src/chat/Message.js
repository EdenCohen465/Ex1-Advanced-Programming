import './Message.css';
import React from 'react';

function Message({ messagesList }) {
    const setStyle = (key) => {

    }
    const chatHistory =
        messagesList.map((message, key) => {
            var margin;
            if (message.iSent == true) {
                margin = "auto";
            } else {
                margin = "0%";
            }
            return (
                <div key={key} > {(message.message != "") ? (
                    <div >
                        {(() => {
                            // display the message depends on her type.
                            if (message.type == "text") {
                                return (<div className="message" style={{ height: "fit-content", marginLeft: margin}}>
                                        <span className="text">{message.message}</span>
                                        <span className="time">{message.time}</span>
                                        </div>
                                        );
                            } else if (message.type == "photo") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ marginLeft: margin }}>
                                                <img className="photoMessage rounded float-start " src={URL.createObjectURL(message.message)} alt="photo" ></img>
                                                <span className="time">{message.time}</span>
                                            </div>
                                            );
                                } else {
                                    return (<div className="message" style={{ marginLeft: margin }}>
                                                <img className="photoMessage rounded float-start " src={message.message} alt="photo" ></img>
                                                <span className="time">{message.time}</span>
                                            </div>);
                                }
                            } else if (message.type == "video") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ marginLeft: margin }}>
                                        <video className="videoMessage" controls>
                                            <source src={URL.createObjectURL(message.message)} type="video/mp4"></source>
                                        </video>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                } else {
                                    return (<div className="message" style={{ marginLeft: margin }}>
                                        <video className="videoMessage" controls>
                                            <source src={message.message} type="video/mp4"></source>
                                        </video>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                }
                            } else if (message.type == "audio") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ height: "fit-content", marginLeft: margin}}>
                                        <audio className="audioMessage" controls >
                                            <source src={URL.createObjectURL(message.message)} type="audio/mpeg"></source>
                                        </audio>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                } else {
                                    return (<div className="message" style={{ height: "fit-content", marginLeft: margin }}>
                                        <audio className="audioMessage" controls >
                                            <source src={message.message} type="audio/mpeg"></source>
                                        </audio>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                }
                            }
                        })()}
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