

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { tableHeads,rowsData } from './constants';
import useStyles from './style';


function Calendar({rows}) {
    const classes = useStyles();

    const getContent = (rowId, columnId)=> {
      console.log(rowId, columnId);
      
      tableHeads.push({
        name: 'aaaaaa'
      })
      rowsData.push({
        name: 'aaaaaaaaaaaa'
      })
    }

    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableRow}></TableCell>
                {tableHeads.map(item => <TableCell key={item.id} className={classes.tableRow}>{item.name}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {rowsData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  {
                    tableHeads.map((column) => {
                     return <TableCell key={column.id} component="th" scope="row">{getContent(row,column)}</TableCell>
                    })
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    )
}

export default Calendar
