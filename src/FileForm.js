import React, {Component} from 'react';
import FileUploader from './FileUploader';
import writeToNEM from './nemPut'
import Button from '@material-ui/core/Button';

const INIT_MESSAGE = "Choose a file to upload to IPFS"
const UPLOADING_MEESAGE = "File is uploading to IPFS, wait a second..."
const UPLOADED_MESSAGE = "File is uploaded to IPFS network succesfully, you can update to NEM now."
const SUCCESS_MESSSAGE = "Book item is updated to NEM blockchain, you can add another book now."

class FileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            ISBN: "",
            contentID: "",
            buttonStatus: true,
            buttonContent: "Add Book",
            message: INIT_MESSAGE,
        }
    }

    startUploadFile = () => {
        this.setState({
            buttonStatus: this.state.contentID==="",
            message: UPLOADING_MEESAGE,
        })
    }

    getContentID = (contentID) => {
        this.setState({
            contentID: contentID,
            buttonStatus: false,
            message: UPLOADED_MESSAGE,
        })
    }

    onChange = (event) => {
        this.setState({
            ISBN: event.target.value
        })
    }

    addBookItemToBlockchain = () => {
        writeToNEM(this.state.ISBN, this.state.contentID);
        console.log(`add item, ISBN: ${this.state.ISBN}, content ID: ${this.state.contentID}`)
        this.setState({
            message: SUCCESS_MESSSAGE,
        })
    }

    render() {
        return(
            <div>
                <FileUploader startUploadFile={this.startUploadFile} getContentID={this.getContentID}>
                </FileUploader>

                <input type="text" placeholder="ISBN" value={this.ISBN} onChange={this.onChange}
                />
                <Button onClick={this.addBookItemToBlockchain} disabled={this.state.buttonStatus}>{this.state.buttonContent}</Button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}


export default FileForm;