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
            searchResult: booklist,
            searchTerm: ""
        }
    }
    search = () => {
        let searchResult = booklist.filter(item => item.ISBN.includes(this.state.searchTerm))
        this.setState({searchResult: searchResult})
    }
    onChange = (event) => {
        let searchTerm = event.target.value
        this.setState({searchTerm: searchTerm})
        this.search()
        if(searchTerm === '') {
            this.setState({searchResult: this.state.list})
        }
    }

    render() {
        const {searchTerm, searchResult} = this.state;
        return <div className="App">
            <AppBar searchTerm={searchTerm} onChange={this.onChange}></AppBar>
            
            <Table searchResult={searchResult}></Table>

            <FileForm></FileForm>
        </div>
    }
}

export default App