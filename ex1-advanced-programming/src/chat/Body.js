import './Body.css'
function Body({ friend }) {
    const chatHistory =
        friend.messagesHistory.map(message => {
            return (<div> <div className="card-header">{message.time}</div>
                <p className="card-text">{message.message}</p></div>
            );
        }
        );

    return (
        <div className="Body">
            <div key="{message}" className="card border-secondary mb-3">
                   
                    <div className="card-body text-secondary">
                        <div>{chatHistory}</div>
                    </div>
                </div>
            
        </div>
    );
}

export default Body;