import { configureStore, combineReducers } from "@reduxjs/toolkit";

import SelectedSongReducer from "../reducers/SelectedSongReducer";

const globalReducer = combineReducers({
 selectedSong: SelectedSongReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
