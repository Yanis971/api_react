import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note/noteSlice";

const store = configureStore({
  reducer: {
    //TODO ici les reducers
    note: noteReducer,
  }
})

export default store;

//définir le type RootState pour utiliser les selecteurs
export type RootState = ReturnType<typeof store.getState>;

//définir le type AppDispatch pour utiliser les actions asynchrones
export type AppDispatch = typeof store.dispatch;
