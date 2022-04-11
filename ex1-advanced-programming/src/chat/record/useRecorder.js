import { useEffect, useState } from "react";
import Helpers from '../Helpers';

const useRecorder = (set_message) => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }


        // Obtain the audio when ready.
        const handleData = e => {
            let url = URL.createObjectURL(e.data)
            setAudioURL(url);
            const today = new Date();
            const time = today.getHours() + ':' + Helpers.setMin(today.getMinutes());
            set_message({ date: Helpers.getDate(), time: time, message: url, displayMessage: "audio", type: "audio", public: false, iSent: true });
        };

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

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;