//this function is used to select/simplify the conditions which are used to select the images
//to display in the weather scene
//the weatherMain input should come from the fetch data .weather[0].main
//
//the revelvant condition can be used to check for a condition

const weatherDict = { Rain: "rain", Drizzle: "rain", ThunderStorm: "rain" };

export default (weatherMain, relevantCondition) => {
  if (relevantCondition === undefined) {
    return weatherDict[weatherMain];
  }
  if (weatherDict[weatherMain] === relevantCondition) {
    return true;
  }
  return false;
};
