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

    // photo will be the photo that the user uploaded.
    var photo = null;
    const photoHandler = (e) => {
        photo = e.target.files[0];
    }

    // the function check the validation of the details.
    const submit = () => {
        // the falg represent if it is ok to connect or not.
        let flag = true;

        // getting the values of all inputs.
        const user_name = document.getElementById('username').value;
        const nick_name = document.getElementById('nickname').value;
        const password_ = document.getElementById('password').value;
        const passwordagain = document.getElementById('password-again').value;

        // if there is a username like the username that was entered, flag is false.
        if (usersList.has(user_name)) {
            alert('Username already taken! enter another username :)');
            flag = false;
        }

        // if the password does not match, flag is false.
        if (password_ != passwordagain) {
            alert('The passwords does not match, please register again.');
            flag = false;
        }

        // check the validation of the password(has both numbers and digits)- if the function returned false, flag is false.
        if (!checkValidPassword(password_)) {
            alert("Password must contain numbers and letters. Try again!");
            flag = false;
        }
     
        // if the flag is true, add the user to the usersList, and update the connectedUser.
        if (flag) {
            const new_user = {
                nickname: nick_name,
                photo: URL.createObjectURL(photo),
                password: password_,
                friendsMessagesHistory: new Map()};
            usersList.set(user_name, new_user);
            setConnected_user({username: user_name, ...new_user});
        }

        // return if it was a succesful connect or not.
        return flag;
    }

    // the function hadle the tap on the submit button.
    const handleSubmit = e => {
        // prevent refresh of the page.
        e.preventDefault();
        // if sunmit returned true, navigate to the chatsBar.
        if (submit()) {
            navigate('/chatsbar');
        }
    }

    // return the html of the register form.
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
