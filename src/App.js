import React, { Component } from 'react';
import FileForm from './FileForm';
import {downloadFileFromIPFS} from './IPFS'
import {getBookList} from './NEM';

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
        // console.log(this.state.searchTerm)
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
            <form>
                <input type="text" value={searchTerm} onChange={this.onChange} placeholder="Search" />
                <button onClick={this.search} type="button">Search</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>content ID</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map(item => {
                        return (
                            <tr key={item.ISBN}>
                                <td>{item.ISBN}</td>
                                <td>{item.contentID}</td>
                                <td><button onClick={()=>downloadFileFromIPFS(item.contentID)}>download</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <FileForm></FileForm>
        </div>
    }
}

export default App