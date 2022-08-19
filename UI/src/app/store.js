import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import combineReducers from '../reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default configureStore(
    {reducer: combineReducers},
    applyMiddleware(thunk, createLogger())
);