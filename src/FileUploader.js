import React from 'react';
// import ipfsClient from 'ipfs-http-client';

const FileUploader = () => {
    
    const handleFileChosen = (file) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            const content = fileReader.result;
            console.log(content)
            UploadFile(content)
        }
        fileReader.readAsText(file);
    }

    const ipfs = window.IpfsHttpClient('47.244.1.218', '5001')

    const UploadFile = async function (data) {
        let content = ipfs.types.Buffer.from(data);
        let results = await ipfs.add(content);
        let hash = results[0].hash; 

        console.log(hash);
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