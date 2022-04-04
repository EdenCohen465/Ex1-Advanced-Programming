import './HeadBar.css';
function HeadBar({friend}){
    return(
        <span className="Head">
            <span><img src={friend.photo}></img></span>
               chat with {friend.nickname}      
        </span>
    );
}

export default HeadBar;