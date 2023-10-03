function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

document.getElementById("myButton").onclick = function () {
  let temp = document.getElementById("myText").value;

  if (document.getElementById("Celsius").checked) {
    temp = toCelsius(temp);
    document.getElementById("myLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("Fahrenheit").checked) {
    temp = toFahrenheit(temp);
    document.getElementById("myLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("myLabel").innerHTML = "Select a button first";
  }
};
