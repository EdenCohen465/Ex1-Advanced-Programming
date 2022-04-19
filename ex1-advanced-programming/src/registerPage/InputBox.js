function InputBox({photoHandler}) {
    // the detailed of the inputs in the register form.
    const inputs = [{ name: "Username:", type: "text", id: "username", placeholder: "please enter user name", labelClass: "form-label", inputClass: "form-control" },
    { name: "Nickname:", type: "text", type: "text", id: "nickname", placeholder: "please enter a nick name", labelClass: "form-label", inputClass: "form-control" },
    { name: "Photo:", type: "file", id: "formFileSm", placeholder: "please add a photo", labelClass: "form-label", inputClass: "form-control form-control-sm" },
    { name: "Password:", type: "password", id: "password", placeholder: "please enter a password", labelClass: "form-label", inputClass: "form-control" },
    { name: "Confirm password:", type: "password", id: "password-again", placeholder: "please enter again the password", labelClass: "form-label", inputClass: "form-control" }];

    // passing the detaild and display the inputs.
    const inputsList = inputs.map((input, key) => {
        return (
            <div key={key}> {(input.type == "file") ? (
                <div>
                    <label className={input.labelClass} htmlFor={input.id}>{input.name}</label>
                    <input className={input.inputClass} type={input.type} id={input.id} onChange={photoHandler} placeholder={input.placeholder} accept="image/*" required></input>
                </div>
            ) : (
                <div>
                    <label className={input.labelClass} htmlFor={input.id}>{input.name}</label>
                    <input className={input.inputClass} type={input.type} id={input.id} placeholder={input.placeholder} required></input>
                </div>
            )}
            </div>
        );
    });

    // return the htm; of the form.
    return (
        <div>
            <h2 className="page-title">Register Page</h2>
            {inputsList}
        </div>
    );
}

export default InputBox;