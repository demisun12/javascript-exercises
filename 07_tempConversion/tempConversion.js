const convertToCelsius = function(Ftemp) {
  let celcius = (Ftemp - 32) * (5 / 9); 
  let rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(Ctemp) {
  let fahren = (Ctemp * (9 / 5)) + 32; 
  let rounded = Math.round(fahren * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
