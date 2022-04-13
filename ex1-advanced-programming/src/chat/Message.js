import './Message.css';
import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
            var margin;
            var background_color;
            if (message.iSent == true) {
                margin = "auto";
                background_color = "rgba(128, 128, 128, 0.41)";
            } else {
                margin = "0%";
                background_color = "#ffffff";
            }
            return (
                <div key={key} > {(message.message != "") ? (
                    <div >
                        {(() => {
                            // display the message depends on her type.
                            if (message.type == "text") {
                                return (<div className="message" style={{ height: "fit-content", marginLeft: margin, backgroundColor: background_color}}>
                                            <Container>
                                                <Row>
                                                    <Col xs="auto" className="text">{message.message}</Col>
                                                    <Col className="time">{message.time}</Col>
                                                </Row>
                                            </Container>
                                        </div>
                                        );
                            } else if (message.type == "photo") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ marginLeft: margin, backgroundColor: background_color}}>
                                                <img className="photoMessage rounded float-start " src={URL.createObjectURL(message.message)} alt="photo" ></img>
                                                <span className="time">{message.time}</span>
                                            </div>
                                            );
                                } else {
                                    return (<div className="message" style={{ marginLeft: margin, backgroundColor: background_color }}>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <img className="photoMessage rounded float-start " src={message.message} alt="photo" ></img>
                                                    </Col>
                                                    <Col className="time">
                                                        {message.time}
                                                    </Col>
                                                </Row>
                                             </Container>
                                            </div>);
                                }
                            } else if (message.type == "video") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ marginLeft: margin, backgroundColor: background_color }}>
                                        <video className="videoMessage" controls>
                                            <source src={URL.createObjectURL(message.message)} type="video/mp4"></source>
                                        </video>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                } else {
                                    return (<div className="message" style={{ marginLeft: margin, backgroundColor: background_color }}>
                                        <video className="videoMessage" controls>
                                            <source src={message.message} type="video/mp4"></source>
                                        </video>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                }
                            } else if (message.type == "audio") {
                                if (message.public == false) {
                                    return (<div className="message" style={{ height: "fit-content", marginLeft: margin, backgroundColor: background_color}}>
                                        <audio className="audioMessage" controls >
                                            <source src={URL.createObjectURL(message.message)} type="audio/mpeg"></source>
                                        </audio>
                                        <span className="time">{message.time}</span>
                                    </div>);
                                } else {
                                    return (<div className="message" style={{ height: "fit-content", marginLeft: margin, backgroundColor: background_color }}>
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
        <div className="chatHistory" id='chatHistory'>
            {chatHistory}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default Message;