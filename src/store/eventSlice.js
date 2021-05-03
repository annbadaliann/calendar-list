import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
  },
  reducers: {
    createEvent: (state, action) => {
      console.log(state.value, state.events)
        state.events = [...state.events, action.payload]
    },
    editEvent: (state, action) => {
        console.log(state, 'state')
    },
  },
})

// Action creators are generated for each case reducer function
export const { createEvent, editEvent } = eventSlice.actions;

export const selectEvents = state => state.events;

export default eventSlice.reducer