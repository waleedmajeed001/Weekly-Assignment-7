//  Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the 
// converted temperatures in an array. Use a for loop to perform the conversion for each 
// temperature.
var celsiusTemperatures: number[] = [20, 25, 30, 35, 40];
var fahrenheitTemperatures: number[] = [];

for (var celsius of celsiusTemperatures) {
    var fahrenheit = (celsius * 9/5) + 32;
    fahrenheitTemperatures.push(fahrenheit);
}

console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
