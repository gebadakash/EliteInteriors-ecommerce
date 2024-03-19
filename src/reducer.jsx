const reducer = (state, action) => {

    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        title: action.payload.title,
        image: action.payload.image,
        content:action.payload.content,
      };
    }
  
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        title: action.payload.title,
        image: action.payload.image,
        content:action.payload.content,
      };
    }

    return state;

};

export default reducer;