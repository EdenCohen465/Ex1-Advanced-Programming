import InputBox from './InputBox';
import LoginPage from '../loginPage/LoginPage';
import { Link, useNavigate } from 'react-router-dom';

import usersList from '../UsersList';

function RegisterPage({ submit, photoHandler}) {
    const navigate = useNavigate();

    const handleSubmit = e => {
        // prevent refresh of the page.
        e.preventDefault();
        if (submit()) {
            navigate('/chatsbar');
        }
    }
    return (

        <div className="mb-3 LoginOrRegister" id ='registerLogic'>
            <form className="Register-form" onSubmit={handleSubmit}>
                <InputBox photoHandler={photoHandler}/>
                <button className="btn btn-outline-secondary" type="submit">Register</button>
                <span>Already registered?</span>
                <Link to='/'> Click here </Link>
                <span>to login.</span>
                
            </form>
        </div>
    );
}

export default RegisterPage;
