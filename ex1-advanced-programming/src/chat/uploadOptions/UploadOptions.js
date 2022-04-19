import './UploadOptions.css'

// the function handle the tap on the icon.
function HandleTap(e, id) {
    // prevent refresh of the page.
    e.preventDefault();
    
    // show the elemnt of Id-id, make the chat and chatsBar dim.
    document.getElementById(id).style.opacity = 1;
    document.getElementById('chatsBar').style.opacity = 0.5;
    document.getElementById('chat').style.opacity = 0.5;
    document.getElementById(id).style.display = "block";
}

// the function return the html represend the upload options- video, image or audio.
function UploadOptions(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
                {/**Upload photo */}
                <button className="bi bi-camera-reels" onClick={(e) => { HandleTap(e, 'selectVideo') }}></button>
                {/**Upload video */}
                <button className="bi bi-image" onClick={(e) => { HandleTap(e, 'selectPhoto')}}></button>
                {/**Upload audio */}
                <button className="bi bi-mic" onClick={(e)=>{HandleTap(e, 'selectAudio')}}></button>
                {/** Close popup window */}
                <button className="close bi bi-x" onClick={()=>props.setUploadOptionsPopup(false)}></button>
                {props.childern}
            </div>
        </div>
    ):"";
}

export default UploadOptions;