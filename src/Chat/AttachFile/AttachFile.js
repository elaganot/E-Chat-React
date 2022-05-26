import './AttachFile.css'
import React, {useState, useRef} from 'react';


function AttachFile({messages, alertFunction}) {

    const [selectedFile, setSelectedFile] = useState();
    const [checkIfFileIsImage, setCheckIfFileIsImage] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
        setCheckIfFileIsImage(event.target.files[0]);
		setSelectedFile(URL.createObjectURL(event.target.files[0]));
		setIsFilePicked(true);
	};

    function isFileImage(file) {
        return (file && file['type'].split('/')[0] === 'image')
    }

	const handleSubmission = (event) => {
        event.preventDefault();
        var time = new Date();
        if(isFileImage(checkIfFileIsImage)){
            var item = {message: <img src={selectedFile} className="image"></img>, timestamp: time.getHours() + ':' + time.getMinutes(), mine: true}
        }
        else {
            var item = {message: <video className="video" controls="controls"> <source src={selectedFile} className="video" type="video/mp4" /></video>, timestamp: time.getHours() + ':' + time.getMinutes(), mine: true}
        }
        alertFunction([...messages, item])

	};

    const inputFile = useRef(null) 

    const onButtonClick = (event) => {
        event.preventDefault();
       inputFile.current.click();
      };


    return(
        <div class="modal fade" id="attachFileModal" tabindex="-1" aria-labelledby="attachFileModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="attachFileModalLabel">Choose File</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="create-contact-form">
                <div class="modal-body">
                    <div class="row mb-3">
                        <button onClick={onButtonClick} className="col-4 btn btn-light">Choose File</button>
                        <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={changeHandler}/>
                        <input type="text" class="col form-control" id="contact-name" placeholder={isFilePicked ? (selectedFile) : ("No file chosen")}></input>
                        <button class="col form-control" onClick={handleSubmission}>Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    );

}

export default AttachFile;