const Reducer = (state, action) => {
  switch (action.type) {
      case "UPDATE_USER_DATA":
          let userData = {...state.userData,...action.userData}
          localStorage.setItem("userData",JSON.stringify(userData))
          return {
            ...state,
            userData: userData,
          };
    default:
      return state;
  }
};

export default Reducer;
