//combined place where all of the redux happened; where we receive actions and dispatch them into reducer to update store objects

import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [ logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, {}, composedEnhancers)