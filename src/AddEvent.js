import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createEvent, editEvent} from './store/eventSlice'

export default function AddEventDialog({open, onClose, clickedEvent}) {
    const {
        register,
        handleSubmit,
        setValue
      } = useForm();

      const dispatch = useDispatch();
  const handleClose = () => {
    onClose()
  };


  useEffect(() => {
    if(clickedEvent){
      setValue('eventName', clickedEvent.eventName)
      setValue('description', clickedEvent.description)
    }
  }, [clickedEvent, setValue])

  const submit = (formData) => {
    if(clickedEvent){
      dispatch(editEvent(formData))
    } else {
      dispatch(createEvent(formData));
    }
      handleClose();
  }

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            label="Event name"
            fullWidth
            margin="normal"
            variant="outlined"
            {...register('eventName', { required: true })}
          />

           <TextField
            label="Description"
            type="email"
            margin="normal"
            fullWidth
            multiline
            rows="3"
            variant="outlined"
            {...register('description', { required: true })}
          />
        </DialogContent>
        <DialogActions style={{padding: "15px 22px"}}>
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
