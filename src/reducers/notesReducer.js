import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function Reducer(state = initialState.notes, action) {
  switch (action.type) {
    case types.ADD_NOTES: {
      let notes = [...state];
      notes.push(action.payload);
      localStorage.setItem("brime_notes", JSON.stringify(notes));
      return notes;
    }
    case types.REMOVE_NOTES: {
      let notes = [...state];
      notes.splice(action.payload, 1);
      localStorage.setItem("brime_notes", JSON.stringify(notes));
      return notes;
    }

    default:
      return state;
  }
}
