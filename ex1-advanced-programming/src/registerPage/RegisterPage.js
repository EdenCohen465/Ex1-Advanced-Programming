import InputBox from './InputBox';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import checkValidPassword from './isValidPassword';
import usersList from '../UsersList';

function RegisterPage({ connected_user, setConnected_user }) {
        // This effect runs once, after the first render
        useEffect(() => {
            document.title = "Register";
          }, [])
    const navigate = useNavigate();

    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    const submit = () => {
        let flag = true;
        //getting the values of all inputs.
        const user_name = document.getElementById('username').value;
        const nick_name = document.getElementById('nickname').value;
        const password_ = document.getElementById('password').value;
        const passwordagain = document.getElementById('password-again').value;

        if (usersList.has(user_name)) {
            alert('Username already taken! enter another username :)');
            flag = false;
        }

        if (password_ != passwordagain) {
            alert('The passwords does not match, please register again.');
            flag = false;
        }

        if (!checkValidPassword(password_)) {
            alert("Password must contain numbers and letters. Try again!");
            flag = false;
        }
     
        if (flag) {
            const new_user = {
                nickname: nick_name,
                photo: URL.createObjectURL(photo),
                password: password_,
                friendsMessagesHistory: new Map()};
            usersList.set(user_name, new_user);
            setConnected_user({username: user_name, ...new_user});
        }
        return flag;
    }

    const handleSubmit = e => {
        // prevent refresh of the page.
        e.preventDefault();
        if (submit()) {
            navigate('/chatsbar');
        }
    }

    return (
        <div className="mb-3 Register" id ='registerLogic'>
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
