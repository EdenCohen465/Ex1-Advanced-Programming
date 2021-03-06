import * as React from "react";
import useRecorder from "./useRecorder";

function Record(props) {
  let [isRecording, startRecording, stopRecording] = useRecorder(props.set_message);

  // send the message when the recording is done.
  const HandleUpload = (e) => {
    e.preventDefault();
    // when we done to record, add new message
    props.HandleAddMessage(e);
  }

  // when we are not recording, make sure that the recorder does not recording.
  const NotRecording = () => {
    stopRecording();
  }

  return ((props.trigger) ? (
    <div className="Record">
      <div className="inner-record">
        <button className="btn btn-outline-secondary btn-sm bi bi-play" onClick={startRecording} disabled={isRecording}> </button>
        <button className="btn btn-outline-secondary btn-sm bi bi-stop" onClick={(e) => { stopRecording(); HandleUpload(e) }} disabled={!isRecording}></button>
        {props.childern}
      </div>
    </div>
  ) : <NotRecording />);
}
export default Record;