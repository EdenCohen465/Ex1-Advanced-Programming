import * as React from "react";
import useRecorder from "./useRecorder";

function Record(props) {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder(props.set_message);

  const HandleUpload = (e) => {
    e.preventDefault();
    // when we done to record, add new message
    props.HandleAddMessage(e);
  }


  return ((props.trigger) ? (
    <div className="Record">
      <div className="inner-record">
        <button className="btn btn-outline-secondary btn-sm bi bi-play" onClick={startRecording} disabled={isRecording}> </button>
        <button className="btn btn-outline-secondary btn-sm bi bi-stop" onClick={(e) => { stopRecording(); HandleUpload(e) }} disabled={!isRecording}></button>
        {props.childern}
      </div>
    </div>
  ) : "");
}
export default Record;