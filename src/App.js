import React, { Component } from 'react';

import booklist from './booklist.json'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: booklist,
            // searchTerm: ""
        }
    }
    // onSearch = (event) => {
    //     console.log(this.searchTerm)
    // }
    downloadFile = (contentID)=> {
        // TODO: use IPFS API to download file
        console.log(contentID)
    }
    render() {
        const {list} = this.state;
        return <div className="App">
            <form>
                <input type="text" />
                <button onClick={this.onSearch}>Search</button>
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
        </div>
    }
}

export default App