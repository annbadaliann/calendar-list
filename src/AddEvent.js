import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createEvent, editEvent } from './store/eventSlice'
import { nanoid } from '@reduxjs/toolkit';

export default function AddEventDialog({ open, onClose, clickedEvent, mode }) {
  const { register, handleSubmit, setValue, watch, control } = useForm();

  const dispatch = useDispatch();

  const handleClose = () => {
    onClose()
  };

  console.log(mode, 'mode')

  useEffect(() => {
    if (clickedEvent) {
      setValue('eventName', clickedEvent.eventName)
      setValue('description', clickedEvent.description)
    }
  }, [clickedEvent, setValue])

  const submit = (formData) => {
    console.log(formData, 'formm data');

    const createForm = {
      ...formData,
      id: nanoid()
    }


    const editForm = {
      ...formData,
      id: clickedEvent?.id
    }
    debugger;

    if (mode === 'edit') {
      dispatch(editEvent(editForm))
    } else {
      dispatch(createEvent(createForm));
    }
    handleClose();
  }


  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>

      <DialogContent>
        <Controller
          name="eventName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Event Name"
              value={value}
              onChange={onChange}
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Description"
              value={value}
              onChange={onChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        />
      </DialogContent>
      <DialogActions style={{ padding: "15px 22px" }}>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={handleSubmit(submit)} color="primary" variant="contained">
          Add
          </Button>
      </DialogActions>
    </Dialog>
  );
}
