import * as types from "./actionTypes";

export const addNotes = data => ({
  type: types.ADD_NOTES,
  payload: data
});

export const removeNotes = index => ({
  type: types.REMOVE_NOTES,
  payload: index
});
