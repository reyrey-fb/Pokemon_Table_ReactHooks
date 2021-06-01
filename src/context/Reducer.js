const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMONLIST":
      return {
        ...state,
        pokemonList: action.payload,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_SORT_CONFIG":
      return {
        ...state,
        sortConfig: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
