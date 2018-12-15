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
            searchTerm: ""
        }
    }
    putBookItem = () => {
        // TODO: use API of NEM to put a new book item
        console.log('put book item to blockchain')
    }
    search = () => {
        console.log(this.state.searchTerm)
    }
    onChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        const {searchTerm, list} = this.state;
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