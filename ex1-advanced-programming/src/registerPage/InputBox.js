import './InputBox.css';

const inputs = [{ type : "text", id: "username", placeholder: "please enter user name"},
    { type: "text", type : "text",id: "nickname", placeholder: "please enter a nick name" },
    { type: "file", id: "photo", placeholder: "please add a photo" },
    { type: "password", id: "password", placeholder: "please enter a password" },
    { type: "password", id: "password-again", placeholder: "please enter again the password" }];   

const inputsList = inputs.map((input) => {
    return (
        <div>
        <label htmlFor={input.id}>{input.id}</label> 
            <input type={input.type} id={input.id} placeholder={input.placeholder} accept="image/*" required></input>
        </div>
        
    );
});

function InputBox() {
    return (
        <div>
        {inputsList}
        </div>
    );
}

export default InputBox;