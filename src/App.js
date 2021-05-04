import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import AddEventDialog from './AddEvent';

import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
import { selectEvents } from './store/eventSlice';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  tableWrapper: {
    maxWidth: "1200px",
    margin: "100px auto"
  },
  tableBody: {
    '& td, & th': {
      border: '1px solid #ccc'
    }
  },
  tableRow: {
    border: '1px solid #ccc'
  }
});

function createData(day, sun, mon, tue, wed, thu, fri, sat) {
  return { day, sun, mon, tue, wed, thu, fri, sat };
}

const rows =
  [
    createData('12am',

    ),
    createData('1am'),
    createData('2am'),
    createData('3am'),
    createData('4am'),
    createData('5am'),
    createData('6am'),
    createData('7am'),
    createData('8am'),
    createData('9am'),
    createData('10am'),
  ]

const tableHeads = [
  "",
  "Sun 5/2",
  "Mon 5/2",
  "Tue 5/2",
  "Wed 5/2",
  "Thu 5/2",
  "Fri 5/2",
  "Sat 5/2",
]

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clickedEvent, setClickedEvent] = useState();
  const [mode, setMode] = useState();

  const events = useSelector(selectEvents)

  const classes = useStyles();

  const openDialog = (e, item, mode ) => {
    setIsDialogOpen(true);
    setMode(mode)
    setClickedEvent(item);
  }

  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  return (
    <div className={classes.tableWrapper}>
      <Box mb={3} display="flex" justifyContent="space-between">
      <Typography align="center" variant="h4" >{new Date().toLocaleDateString()}</Typography>
        <Button variant="contained" color="primary" onClick={(e) => openDialog(e, null, 'create')}>Add event</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="a dense table">
          <TableHead>
            <TableRow >
              {tableHeads.map(item => <TableCell className={classes.tableRow}>{item}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell >
                  {row.sun}
                </TableCell>
                <TableCell >
                  {row.mon}
                </TableCell>

                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {isDialogOpen && <AddEventDialog open={isDialogOpen} onClose={closeDialog} clickedEvent={clickedEvent} mode={mode}/>}

      <Grid container spacing={2}>

        {events?.map((item) => (
          <Grid item xl={4} key={item.id}>
            <Card style={{ padding: '8px', margin: "20px 0", cursor: 'default' }}>
            {/* <Typography>id: {item.id}</Typography> */}

              <Box display="flex" justifyContent="space-between">
                <Typography>
                  Event name: {item.eventName}
                </Typography>
                <EditIcon onClick={(e) => openDialog(e, item, 'edit')} style={{ cursor: 'pointer', color: '#6b6b6b' }} />
              </Box>
              <Typography>
                Description: {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default App;
