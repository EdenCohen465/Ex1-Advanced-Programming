import './Body.css';


function Body({ chat }) {

    const chatHistory =
        chat.map((message) => {
            return (<p className="message" key={Math.random().toString(36).substr(2, 9)} >
                <span className="text">{message.m}</span><span className="time">{message.time}</span></p>
            );
        }
        );

    return (
        <div>
            <div>
                <div className="chatHistory">
                    {chatHistory}</div>
                <div className="newMessage">
                </div>
            </div>

        </div>
    );
}

export default Body;