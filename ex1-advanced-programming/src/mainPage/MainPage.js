import React from 'react';
import Chat from '../chat/Chat';
function MainPage() {
  const message1 = {
    time: "10:00",
    m: "HEEEEY"
  }
  const message2 = {
    time: "12:00",
    m: "whats up"
  }
  const message3 = {
    time: "13:00",
    m: "thanks"
  }
  const friend1 = {nickname:"Eden", messagesHistory:[message1, message2,message3]}
  return(
    <div className="welcome">
      <Chat friend={friend1} />
      
    </div>
  );
}
export default MainPage;