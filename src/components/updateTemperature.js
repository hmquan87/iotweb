function temperature() {
    const thermometerElement = document.getElementById('thermometer');
    const temperatureText = document.getElementById('text1').textContent;
  
    const temperature = parseInt(temperatureText, 10);
  
    if (Number.isNaN(temperature)) {
      console.error("Invalid temperature value:", temperatureText);
      return; // Exit the function if temperature is not a number
    }
  
    const color = getTemperatureColor(temperature);
    thermometerElement.style.color = color;
  
    console.log(
      `Temperature updated: ${temperature}°C, color set to ${color}`
    );
  }
  
function getTemperatureColor(temperature) {
  if (temperature <= 20) {
    return 'blue';
  } else if (temperature <= 45) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function updateTemperature() {
  setInterval(() => {temperature();}, 10);
}

export {updateTemperature};