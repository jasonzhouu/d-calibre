import React from 'react';
import {downloadFileFromIPFS} from './IPFS'

const Table = ({searchResult}) => 
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

export default Table;