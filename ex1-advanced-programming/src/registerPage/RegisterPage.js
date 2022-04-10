import InputBox from './InputBox';
import { Link, useNavigate } from 'react-router-dom';
import checkValidPassword from './isValidPassword';
import usersList from '../UsersList';

function RegisterPage({ setUser }) {
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

        usersList.map((user) => {
            if (user.username == user_name) {
                alert('Username already taken! enter another username :)');
                flag = false;
            }
        });

        if (password_ != passwordagain) {
            alert('The passwords does not match, please register again.');
            flag = false;
        }

        if (!checkValidPassword(password_)) {
            alert("Password must contain numbers and letters. Try again!");
            flag = false;
        }

        const new_user = {
            username: user_name,
            nickname: nick_name,
            photo: photo,
            public_photo: "",
            password: password_,
            friendsMessagesHistory:
                [{ username: "ronioded", messagesHistory: [{ time: "10:00", message: "heyyyyy", displayMessage:"", type: "text" }, { time: "10:30", m: "llllllllllll", type: "text" }, { time: "12:00", m: "oooooo", type: "text" }] },
                    { username: "edencohen", messagesHistory: [{ time: "", message: "", displayMessage:"", type: "" }] },
                    { username: "israelisraeli", messagesHistory: [{ time: "", message: "", displayMessage:"", type: "" }] },
                    { username: "avicohen", messagesHistory: [{ time: "", message: "", displayMessage:"", type: "" }] },
                    { username: "tallevi", messagesHistory: [{ time: "", message: "", displayMessage:"", type: "" }] }]};
        usersList.push(new_user);

        setUser(new_user);

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
