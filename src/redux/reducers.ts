import { combineReducers } from 'redux';
import { reducer as memberReducer } from "./modules/member";

export const rootReducer = combineReducers({
  member: memberReducer
})