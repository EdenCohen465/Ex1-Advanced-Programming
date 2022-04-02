import './RegisterPage.css';
import InputBox from './InputBox';
import LoginPage from '../loginPage/LoginPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import usersList from '../UsersList';

function RegisterPage({submit}) {
    const handleLogin = e => {
        e.preventDefault();
        //LoginPage();
    }

    const handleSubmit = e => {
        // prevent refresh of the page.
        e.preventDefault();
        submit(0);
    }
    return (
        <div className="mb-3" id = 'registerLogic'>
            <form className="Register-form" onSubmit={handleSubmit}>
                <InputBox />
                <button className="btn btn-outline-secondary" type="submit">Register</button>
                {/* <span>Already registered? </span>
                <button onClick={handleLogin}>Click here </button>
                <span>to login.</span> */}
                {/* <BrowserRouter>
                    <span>Already registered?</span>
                    <Link to='/'> Click here </Link>
                    <span>to login.</span>
                </BrowserRouter> */}
                
            </form>
        </div>
    );
}

export default RegisterPage;
