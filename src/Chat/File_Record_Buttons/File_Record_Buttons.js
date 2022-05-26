import React from 'react';

function File_Record_Buttons() {
    return (
        <div className='special-message'>
            <div id="non-text-bar" className="toolbar-nontext btn-toolbar" role="toolbar">
                <div className="btn-group me-2" role="group">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#attachFileModal">
                        <i className="bi bi-images"></i>
                    </button>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#attachFileModal">
                        <i className="bi bi-camera-reels"></i>
                    </button>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recordModal">
                        <i className="bi bi-mic"></i>
                    </button>
                    <button type="button" className="btn btn-secondary">
                        <i className="bi bi-geo-alt"></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default File_Record_Buttons;