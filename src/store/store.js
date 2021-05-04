import { configureStore } from '@reduxjs/toolkit'


import logger from 'redux-logger'

import eventSliceReducer from './slices/eventSlice';

const store =  configureStore({
  reducer: eventSliceReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;