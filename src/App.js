import React, { Component } from 'react';
import FileForm from './FileForm';
import Table from './Table';
import AppBar from './AppBar';
import nemDownload from './nemDownload'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    "ISBN": "",
                    "contentID": ""
                }
            ],
            searchTerm: ""
        }
    }
    componentDidMount(){
        nemDownload().then(promise => {
            this.setState({list: promise})
        })
    }
    onChange = (event) => {
        let searchTerm = event.target.value
        this.setState({searchTerm: searchTerm})
    }

    render() {
        const {list, searchTerm} = this.state;
        return <div className="App">
            <AppBar searchTerm={searchTerm} onChange={this.onChange}></AppBar>
            
            <Table list={list} searchTerm={searchTerm}></Table>

            <FileForm></FileForm>
        </div>
    }
}

export default App