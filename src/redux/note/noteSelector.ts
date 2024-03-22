import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectNotes = (state: RootState) => state.note.notes;
const selectLoading = (state: RootState) => state.note.loading;

export const selectNoteData = createSelector(
  [selectNotes, selectLoading],
  (notes, loading) => ({ notes, loading })
)