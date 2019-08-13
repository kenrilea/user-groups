const reducer = (state, action) => {
  if (action.type === "newWeatherData") {
    return { ...state, weatherData: action.data };
  }
  return state;
};

export default reducer;
