import React, { Component } from 'react';

const list = 
[
    {
        ISBN: "3642147631",
        contentID: "QmSCaRwk2QxKyuZ2cLa1aLkPhNxkierfHpYntCfbJ58vjX"
    }, 
    {
        ISBN: "9781133187813",
        contentID: "QmcC6EzPyW3RdH1rnxkXDuJdZ7uAGUfzaxqG4odmxPQqZN"
    }
]


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list,
            // searchTerm: ""
        }
    }
    // onSearch = (event) => {
    //     console.log(this.searchTerm)
    // }
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }
}

export default App