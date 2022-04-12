import { useEffect, useState } from "react";
import Helpers from '../Helpers';

const useRecorder = (set_message) => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    useEffect(() => {
        // first time we record, create recorder.
        if (recorder === null) {
            // if we record
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // start or stop recorder depend on the state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = e => {
            // create url
            let url = URL.createObjectURL(e.data)
            setAudioURL(url);
            // set the new message in order to send it.
            const today = new Date();
            const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
            set_message({ date: Helpers.getDate(), time: time, message: e.data, displayMessage: "audio", type: "audio", public: false, iSent: true });
        };

        // when the data is available, send it to handleData.
        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);
    
    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };

    return [audioURL, isRecording, startRecording, stopRecording];
};
// create recorder
async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;
