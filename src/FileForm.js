import React, {Component} from 'react';
import FileUploader from './FileUploader';
import writeToNEM from './nemPut'
import Button from '@material-ui/core/Button';

class FileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            ISBN: "",
            contentID: "",
            buttonStatus: true,
            buttonContent: "Add Book"
        }
    }

    addBookItemToBlockchain = () => {
        // 在文件上传成功之前，不能调用
        writeToNEM(this.state.ISBN, this.state.contentID);
        console.log(`add item, ISBN: ${this.state.ISBN}, content ID: ${this.state.contentID}`)
    }

    getContentID = (contentID) => {
        this.setState({
            contentID: contentID,
            buttonStatus: false,
            buttonContent: "Upload ISBN",
        })
    }

    onChange = (event) => {
        this.setState({
            ISBN: event.target.value,
            buttonStatus: this.state.contentID==="",
            buttonContent: "Uploading"
        })
    }

    render() {
        return(
            <div>
                <FileUploader getContentID={this.getContentID}>
                </FileUploader>

                <input type="text" placeholder="ISBN" value={this.ISBN} onChange={this.onChange}
                />
                <Button onClick={this.addBookItemToBlockchain} disabled={this.state.buttonStatus}>{this.state.buttonContent}</Button>
            </div>
        )
    }
}


export default FileForm;