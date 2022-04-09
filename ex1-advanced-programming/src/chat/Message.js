import './Message.css';


function Message({ messagesList }) {
    console.log(messagesList);
    const chatHistory =
        messagesList.map((message, key) => {
            return (
            <p className="message" key={key} > { (message.m != "") ? (
                <div> 
                    <span className="text">{message.m}</span>
                    <span className="time">{message.time}</span>
                </div>
            ) : ""
        }</p>);
        }
        );

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