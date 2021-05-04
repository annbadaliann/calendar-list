import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { Controller, useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';

import { createEvent, editEvent } from '../../store/slices/eventSlice'

export default function AddEventDialog({ open, onClose, clickedEvent, mode }) {
  const { handleSubmit, setValue, control } = useForm();
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose()
  };

  useEffect(() => {
    if (clickedEvent) {
      setValue('eventName', clickedEvent.eventName)
      setValue('description', clickedEvent.description)
    }
  }, [clickedEvent, setValue])


  const submit = (formData) => {
    const createForm = {
      ...formData,
      id: nanoid()
    }

    const editForm = {
      ...formData,
      id: clickedEvent?.id
    }

    if (mode === 'edit') {
      dispatch(editEvent(editForm))
    }
    
    if(mode === 'create'){
      dispatch(createEvent(createForm));
    }

    handleClose();
  }

  return (
   <>
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
     </>
  );
}
