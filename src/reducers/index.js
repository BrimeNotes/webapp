import { combineReducers } from "redux";
import session from "./sessionReducer";
import notes from "./notesReducer";

const rootReducer = combineReducers({
  // short hand property names
  session,
  notes
});

export default rootReducer;
