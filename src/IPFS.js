const ipfs = window.IpfsHttpClient('47.244.1.218', '5001')

const uploadFileToIPFS = async function (data) {
    let content = ipfs.types.Buffer.from(data);
    let results = await ipfs.add(content);
    let contentID = results[0].hash; 
    return contentID
}

const downloadFileFromIPFS = (contentID)=> {    
    contentID = 'QmUSPeP1DVr11RkKSrUtgCdLf67vgYRHBM1XtEQajkfYp5'
    ipfs.cat(contentID, function (err, file) {
        if (err) {
        // throw err
        return 'error'
        }
    
        funDownload(file, `${contentID}.pdf`)
    })
}

var funDownload = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

export {ipfs, uploadFileToIPFS, downloadFileFromIPFS}