// import IPFS from 'IPFS'

const downloadFileWithJSIPFS = (contentID) => {
    // const node = new IPFS()
    const node = new window.Ipfs()
    contentID = 'QmabY2zFqV7ezJZanpi1zxWwP28G2QBuhQ6dgdFSqwZYJW'
    node.once('ready', () => {
        node.files.cat(contentID, (err, data)=>{
            if(err) return console.error(err)
            console.log(data.toString())
        })
    })
}

export {downloadFileWithJSIPFS}