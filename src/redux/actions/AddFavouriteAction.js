export const ADD_FAV = "ADD_FAV";

export const AddFavouriteAction = (songId) => ({
 type: ADD_FAV,
 payload: songId,
});
