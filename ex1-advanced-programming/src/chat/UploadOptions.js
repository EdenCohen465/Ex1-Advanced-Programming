
import './UploadOptions.css'
function HandleImage(e) {
    e.preventDefault();
    document.getElementById('chatsBar').style.opacity = 0.5;
    document.getElementById('chat').style.opacity = 0.5;
    document.getElementById('selectPhoto').style.opacity = 1;
    document.getElementById('selectPhoto').style.display = "block";
}

function UploadOptions(props) {
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
               <button className="bi bi-camera-reels"></button>
               <button className="bi bi-image" onClick={HandleImage}></button>
               <button  className="bi bi-geo-alt"></button>
               <button className="close bi bi-x" onClick={()=>props.setUploadOptionsPopup(false)}></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadOptions;