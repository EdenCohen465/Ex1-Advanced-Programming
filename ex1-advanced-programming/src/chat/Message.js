import './Message.css';
import React, { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function style_message(message) {
    var margin;
    var background_color;
    if (message.iSent == true) {
        margin = "auto";
        background_color = "rgba(128, 128, 128, 0.41)";
    } else {
        margin = "0%";
        background_color = "#ffffff";
    }
    
    if (message.type == "text") {
        return { height: "fit-content", marginLeft: margin, backgroundColor: background_color}
    } else if (message.type == "photo") {
        return { height: "164px", marginLeft: margin, backgroundColor: background_color}                
    } else if (message.type == "video") {
        return { height: "164px", marginLeft: margin, backgroundColor: background_color}                
    } else if (message.type == "audio") {
        return { height: "fit-content", marginLeft: margin, backgroundColor: background_color}                
    }
}

function Message({ messagesList }) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
      useEffect(() => {
        scrollToBottom()
      }, [messagesList]);

    const chatHistory = messagesList.map((message, key) => {
            const message_style = style_message(message);
            return (
                <div key={key}> {(message.message != "") ? (
                    <div >
                        <div className="message" style={{ height: message_style.height, marginLeft: message_style.marginLeft, backgroundColor: message_style.backgroundColor}}>
                            <Container>
                                <Row>
                                    <Col xs="auto">
                                    {(() => {
                                        if (message.type == "text") {
                                            return (<span className='text'>{message.message}</span>);
                                        } else if (message.type == "photo") {
                                            return (<img className='photoMessage rounded float- start' src={message.message} alt='photo' ></img>);
                                        } else if (message.type == "video") {
                                            return (<video className='videoMessage' controls><source src={message.message} type='video/mp4'></source></video>);
                                        } else if (message.type == "audio") {
                                            return (<audio className='audioMessage' controls ><source src={message.message} type='audio/mpeg'></source></audio>);
                                        }
                                    })()} 
                                    </Col>
                                    <Col className="time">{message.time}</Col>
                                </Row>
                            </Container>
                        </div>
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