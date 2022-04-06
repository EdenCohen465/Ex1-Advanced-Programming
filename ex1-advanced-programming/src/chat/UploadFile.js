import './UploadFile.css'

function UploadFile(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
               <button><i className="bi bi-camera"></i></button>
               <button><i className="bi bi-file-earmark-text"></i></button>
               <button><i className="bi bi-image"></i></button>
               <button><i className="bi bi-geo-alt"></i></button>
               <button className="close" onClick={()=>props.setUploadFile(false)}><i className="bi bi-x"></i></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadFile;