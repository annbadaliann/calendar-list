import { createSlice } from '@reduxjs/toolkit'

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
  },
  reducers: {
    createEvent: (state, action) => {
      state.events = [...state.events, action.payload]
    },
    editEvent: (state, action) => {
      state.events = state.events.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item;

      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { createEvent, editEvent } = eventSlice.actions;

export const selectEvents = state => state.events;

export default eventSlice.reducer