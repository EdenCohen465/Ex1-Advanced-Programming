import InputBox from './InputBox';
import { Link, useNavigate } from 'react-router-dom';
import checkValidPassword from './isValidPassword';
import usersList from '../UsersList';
import e from '../messages_objects/e.jpg';
import f from '../messages_objects/f.jpg';
import video1 from '../messages_objects/video1.mp4';

function RegisterPage({ connected_user, setConnected_user }) {
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

        const new_contact_default = new Map();
        new_contact_default.set('admin', [{ time: "14:45", message: f, displayMessage: "photo", type: "photo", public: true, iSent: false }, { time: "14:57", message: "Thanks!!", displayMessage: "Thanks!!", type: "text", iSent: true }]);
        new_contact_default.set("edencohen", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
        new_contact_default.set("ronioded", [{ time: "06:00", message: video1, displayMessage: "video", type: "video", public: true, iSent: false }]);
        new_contact_default.set("israelisraeli", [{ time: "", message: "", displayMessage: "", type: "", iSent: "" }]);
        new_contact_default.set("avicohen", [{ time: "18:16", message: e, displayMessage: "photo", type: "photo", public: true, iSent: true }]);        
        const new_user = {
            nickname: nick_name,
            photo: photo,
            public_photo: "",
            password: password_,
            friendsMessagesHistory: new_contact_default};
        usersList.set(user_name, new_user);


        setConnected_user({username: user_name, ...new_user});
        console.log(connected_user)
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
