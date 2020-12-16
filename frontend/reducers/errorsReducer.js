/** This file will be responsible for combining our reducers
 *  that handle errors
 */

import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessions_errors_Reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;
