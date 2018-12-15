import React, { Component } from 'react';

import booklist from './booklist.json'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: booklist,
            searchTerm: ""
        }
    }
    getBookList = () => {
        // TODO: use API of NEM to get book list
        console.log('get book list from blockchain')
    }
    putBookItem = () => {
        // TODO: use API of NEM to put a new book item
        console.log('put book item to blockchain')
    }
    search = () => {
        // TODO: use Goodreads API "Find books by title, author, or ISBN" to search 
        console.log(this.state.searchTerm)
    }
    downloadFile = (contentID)=> {
        // TODO: use IPFS API to download file
        console.log(`download file of content ID: ${contentID} `)
    }
    onChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    render() {
        const {searchTerm, list} = this.state;
        this.getBookList();
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
                    {list.map(item => {
                        return (
                            <tr key={item.ISBN}>
                                <td>{item.ISBN}</td>
                                <td>{item.contentID}</td>
                                <td><button onClick={()=>this.downloadFile(item.contentID)}>download</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
        </div>
    }
}

export default App