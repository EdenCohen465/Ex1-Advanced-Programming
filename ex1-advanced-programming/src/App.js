import LoginPage from './loginPage/LoginPage';
import React, { useState } from 'react';
import ChatsBar from './chatsBar/ChatsBar';
import './App.css';
import RegisterPage from './registerPage/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({ username: "", nickname: "", public_photo: "", password: "", friendsMessagesHistory: ""});

  const Logout = () => {
    setUser({ username: "", nickname: "", public_photo: "", password: "", friendsMessagesHistory: "" });
  }

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/registerpage" element={<RegisterPage setUser={setUser}/>}></Route>
            <Route path="/" element={<LoginPage setUser={setUser} />}></Route>
            <Route path="/chatsbar" element={<ChatsBar user={user} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;