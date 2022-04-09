import './Message.css';


function Message({ messagesList }) {
    const chatHistory =
        messagesList.map((message, key) => {
            return (
                <div className="message" key={key} > { (message.m != "") ? (
                    <div> {(message.type == "text") ? (
                        <span className="text">{message.m}</span>
                    ) : (
                        <img className="photoMessage rounded float-start " src={URL.createObjectURL(message.m)} alt="photo" ></img>
                        /* ) : (
                            <video>
                                <source src={message.m} type="video/*"></source>
                            </video>
                        ) */
                    )}
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