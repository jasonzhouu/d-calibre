import React from 'react';
import {uploadFileToIPFS} from './IPFS'

const FileUploader = ({getContentID, startUploadFile}) => {
    
    const handleFileChosen = (file) => {
        startUploadFile();
        
        let fileReader = new FileReader();
        fileReader.onload = () => {
            const content = fileReader.result;
            uploadFileToIPFS(content).then(contentID => {
                getContentID(contentID);
            })
        }
        fileReader.readAsText(file);
    }

    return (
        <input type='file'
                onChange={e => handleFileChosen(e.target.files[0])}
        />
    )

}

export default FileUploader;