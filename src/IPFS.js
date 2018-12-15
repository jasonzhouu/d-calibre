const ipfs = window.IpfsHttpClient('47.244.1.218', '5001')

const uploadFileToIPFS = async function (data) {
    let content = ipfs.types.Buffer.from(data);
    let results = await ipfs.add(content);
    let contentID = results[0].hash; 
    return contentID
}

const downloadFileFromIPFS = (contentID)=> {
    // TODO: download file from IPFS
    
    console.log(`download file of content ID: ${contentID} `)
}

export {ipfs, uploadFileToIPFS, downloadFileFromIPFS}