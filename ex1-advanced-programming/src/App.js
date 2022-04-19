import LoginPage from './loginPage/LoginPage';
import React, { useState, useEffect } from 'react';
import ChatsBar from './chatsBar/ChatsBar';
import './App.css';
import RegisterPage from './registerPage/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [connected_user, setConnected_user] = useState({
    username: "", nickname: "", photo: "", password: "", friendsMessagesHistory: ""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registerpage" element={<RegisterPage connected_user={connected_user} setConnected_user={setConnected_user} />}></Route>
          <Route path="/" element={<LoginPage setConnected_user={setConnected_user} />}></Route>
          <Route path="/chatsbar" element={<ChatsBar connected_user={connected_user} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;