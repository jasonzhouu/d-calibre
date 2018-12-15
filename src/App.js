import React, { Component } from 'react';
import FileForm from './FileForm';
import {getBookList} from './NEM';
import Table from './Table';
import AppBar from './AppBar';

const booklist = getBookList();

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: booklist,
            searchTerm: ""
        }
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