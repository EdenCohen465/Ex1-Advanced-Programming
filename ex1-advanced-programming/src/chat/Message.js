import './Message.css';


function Message({ messagesList }) {
    console.log(messagesList);
    const chatHistory =
        messagesList.map((message, key) => {
            return (
                <p className="message" key={key} > { (message.m != "") ? (
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
                </p>
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