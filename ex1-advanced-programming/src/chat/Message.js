import './Message.css';


function Message({ chat }) {

    const chatHistory =
        chat.map((message, key) => {
            return (
            <p className="message" key={key} >
                <span className="text">{message.m}</span>
                <span className="time">{message.time}</span>
            </p>
            );
        }
        );

    return (
        <div>
            <div>
                <div className="chatHistory">
                    {chatHistory}</div>
            </div>

        </div>
    );
}

export default Message;