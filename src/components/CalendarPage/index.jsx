import React, { useState } from 'react';

import AddEventDialog from '../AddEvent/AddEvent';
import useStyles from './style';

import { rows } from './constants';
import DialogComponent from '../Dialog/Dialog'
import CalendarHeader from './Header';
import CalendarTable from './Calendar';

function CalendarPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clickedEvent, setClickedEvent] = useState();
  const [mode, setMode] = useState();

  const classes = useStyles();

  const openDialog = (e, item, mode) => {
    setIsDialogOpen(true);
    setMode(mode)
    setClickedEvent(item);
  }

  const closeDialog = () => {
    setIsDialogOpen(false);
  }

  const onSubmit = () => {

  }

  return (
    <div className={classes.tableWrapper}>
      <CalendarHeader openDialog={openDialog}/>
      <CalendarTable rows={rows}/>

    
      {isDialogOpen &&
        <DialogComponent open={isDialogOpen} handleClose={closeDialog} onSubmit={onSubmit}>
          <AddEventDialog clickedEvent={clickedEvent} mode={mode} />
        </DialogComponent>
      }
    </div>
  )
}

export default CalendarPage
