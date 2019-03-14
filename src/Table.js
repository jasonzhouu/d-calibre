import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {downloadFileFromIPFS} from './IPFS'
// import {downloadFileWithJSIPFS} from './js-ipfs'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable({classes, list, searchTerm}) {
    const isFulfilled = searchTerm => item => 
        item.ISBN.includes(searchTerm)
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell numeric>ISBN</TableCell>
                <TableCell numeric>content ID</TableCell>
                <TableCell></TableCell>
            </TableRow>
            </TableHead>
                <TableBody>
                {list.filter(isFulfilled(searchTerm)).map(item => {
                    return (
                    <TableRow key={item.ISBN}>
                        <TableCell component="th" scope="row">
                        {item.ISBN}
                        </TableCell>
                        <TableCell numeric>{item.contentID}</TableCell>
                        <TableCell numeric>
                            <a href={`http://zhouys.xyz/ipfs/${item.contentID}`}>download</a>
                            {/* <button onClick={()=>downloadFileWithJSIPFS(item.contentID)}>download</button> */}
                        </TableCell>
                    </TableRow>
                    );
                })}
            </TableBody>
        </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
