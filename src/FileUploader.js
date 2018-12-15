import React from 'react';
import {uploadFileToIPFS} from './IPFS'

const FileUploader = ({getContentID}) => {
    
    const handleFileChosen = (file) => {
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
        <div>
            <input type='file'
                   onChange={e => handleFileChosen(e.target.files[0])}
            />
        </div>
    )

}

export default FileUploader;