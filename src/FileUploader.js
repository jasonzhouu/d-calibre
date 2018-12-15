import React from 'react';

const FileUploader = ({getContentID}) => {
    
    const handleFileChosen = (file) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            const content = fileReader.result;
            UploadFile(content)
        }
        fileReader.readAsText(file);
    }

    const ipfs = window.IpfsHttpClient('47.244.1.218', '5001')

    const UploadFile = async function (data) {
        let content = ipfs.types.Buffer.from(data);
        let results = await ipfs.add(content);
        let contentID = results[0].hash; 
        getContentID(contentID);
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