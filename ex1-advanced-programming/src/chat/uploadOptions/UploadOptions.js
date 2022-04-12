import './UploadOptions.css'
function HandleImageOrVideo(e, id) {
    e.preventDefault();
    document.getElementById(id).style.opacity = 1;
    document.getElementById('chatsBar').style.opacity = 0.5;
    document.getElementById('chat').style.opacity = 0.5;
    document.getElementById(id).style.display = "block";
}

function UploadOptions(props) {
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
                {/**Upload photo */}
                <button className="bi bi-camera-reels" onClick={(e) => { HandleImageOrVideo(e, 'selectVideo') }}></button>
                {/**Upload video */}
                <button className="bi bi-image" onClick={(e) => { HandleImageOrVideo(e, 'selectPhoto')}}></button>
                {/**Upload audio */}
                <button className="bi bi-mic" onClick={(e)=>{HandleImageOrVideo(e, 'selectAudio')}}></button>
                {/** Close popup window */}
                <button className="close bi bi-x" onClick={()=>props.setUploadOptionsPopup(false)}></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadOptions;