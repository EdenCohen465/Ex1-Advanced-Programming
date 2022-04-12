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
        <audio src={audioURL} controls />
        <button onClick={startRecording} disabled={isRecording}>
          start
        </button>
        <button onClick={(e) => { stopRecording(); HandleUpload(e) }} disabled={!isRecording}>
          stop
        </button>
        {props.childern}
      </div>
    </div>
  ) : "");
}
export default Record;