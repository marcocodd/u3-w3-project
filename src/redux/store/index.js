import { configureStore, combineReducers } from "@reduxjs/toolkit";

import SelectedSongReducer from "../reducers/SelectedSongReducer";
import FavouriteReducer from "../reducers/AddFavouriteReducer";

const globalReducer = combineReducers({
 selectedSong: SelectedSongReducer,
 favourite: FavouriteReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
