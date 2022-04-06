import './UploadFile.css'

function UploadFile(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
               <span>czxczx</span>
               <span><button className="close-btn" onClick={()=>props.setUploadFile(false)}><i className="bi bi-x"></i></button></span>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadFile;