
import './UploadOptions.css'
function HandleImageOrVideo(e, id) {
    e.preventDefault();
    document.getElementById('chatsBar').style.opacity = 0.5;
    document.getElementById('chat').style.opacity = 0.5;
    document.getElementById(id).style.opacity = 1;
    document.getElementById(id).style.display = "block";
}

function UploadOptions(props) {
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
                <button className="bi bi-camera-reels" onClick={(e) => { HandleImageOrVideo(e, 'selectVideo') }}></button>
                <button className="bi bi-image" onClick={(e) => { HandleImageOrVideo(e, 'selectPhoto')}}></button>
                <button  className="bi bi-geo-alt"></button>
                <button className="close bi bi-x" onClick={()=>props.setUploadOptionsPopup(false)}></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadOptions;