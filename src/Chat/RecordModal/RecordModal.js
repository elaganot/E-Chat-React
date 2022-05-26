import React from 'react';
import useRecorder from '../UseRecorder/UseRecorder';
import AudioMessage from '../AudioMessage/AudioMessage';

function RecordModal({messages, alertFunction}) {

	const handleSubmission = (event) => {
        event.preventDefault();
        var time = new Date();
        const item = {message: <AudioMessage audioURL={audioURL}  />, timestamp: time.getHours() + ':' + time.getMinutes()}
        alertFunction([...messages, item])

	};

    
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();


    return(
        <div class="modal fade" id="recordModal" tabindex="-1" aria-labelledby="recordModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form id="create-contact-form">
                        <div class="modal-body">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-secondary" onClick={startRecording} disabled={isRecording}>Record</button>
                                <button className="btn btn-secondary" onClick={stopRecording} disabled={!isRecording}>Stop</button>
                                <button className="btn btn-secondary" onClick={handleSubmission}>Send</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default RecordModal;