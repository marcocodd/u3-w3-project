const initialState = {
 songIdFav: [],
};

const AddFavouriteReducer = (state = initialState, action) => {
 switch (action.type) {
  case "ADD_FAV":
   return {
    ...state,
    songIdFav: action.payload,
   };
  default:
   return state;
 }
};

export default AddFavouriteReducer;
