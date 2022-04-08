
import './UploadOptions.css'

function UploadOptions(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
               <button className="bi bi-camera-reels"></button>
               <button className="bi bi-image"></button>
               <button  className="bi bi-geo-alt"></button>
               <button className="close bi bi-x" onClick={()=>props.setUploadOptionsPopup(false)}></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadOptions;