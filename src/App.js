import React, { Component } from 'react';
import FileForm from './FileForm';
import {getBookList} from './NEM';
import Table from './Table';
import Form from './Form';

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
        let searchResult = booklist.filter(item => item.ISBN===this.state.searchTerm)
        this.setState({searchResult: searchResult})
    }
    onChange = (event) => {
        let searchTerm = event.target.value
        this.setState({searchTerm: searchTerm})
        if(searchTerm === '') {
            this.setState({searchResult: this.state.list})
        }
    }

    render() {
        const {searchTerm, searchResult} = this.state;
        return <div className="App">
            <Form searchTerm={searchTerm} onChange={this.onChange} search={this.search}></Form>
            
            <Table searchResult={searchResult}></Table>

            <FileForm></FileForm>
        </div>
    }
}

export default App