import React, {Component} from 'react';
import FileUploader from './FileUploader';
import {writeToNEM} from './NEM';

class FileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            ISBN: "",
            contentID: ""
        }
    }

    addBookItemToBlockchain = () => {
        // TODO: use API of wan to add book item to blockchain
        writeToNEM(this.state.ISBN, this.state.contentID);
    }

    getContentID = (contentID) => {
        this.setState({contentID: contentID})
    }

    onChange = (event) => {
        this.setState({ISBN: event.target.value})
    }

    render() {
        return(
            <div>
                <FileUploader getContentID={this.getContentID}>
                </FileUploader>

                <input type="text" placeholder="ISBN" value={this.ISBN} onChange={this.onChange}
                />
                <button onClick={this.addBookItemToBlockchain} type="button">Add</button>
            </div>
        )
    }
}


export default FileForm;