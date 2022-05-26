import React from 'react';


function AudioMessage({audioURL}) {

	const playAudio = (event) => {
        event.preventDefault();
        const audio = new Audio(audioURL)
        audio.play();

	};

    return(
        <button onClick={playAudio} type="button" className="btn btn-light">
            <i className="bi bi-play"></i>
        </button>
    )
}

export default AudioMessage;