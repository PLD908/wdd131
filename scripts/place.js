 // Display the current year
 document.getElementById('currentYear').textContent = new Date().getFullYear();

 // Display the last modified date
 document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();

 // Calculate and display the wind chill
 function calculateWindChill(temperature, windSpeed) {
   if (temperature <= 10 && windSpeed > 4.8) {
     return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
   } else {
     return 'N/A';
   }
 }

 const temperatureValue = document.querySelector('.temperature .value');
 const windSpeedValue = document.querySelector('.wind .value');
 const windChillValue = document.querySelector('.wind-chill .value');

 const temperature = parseFloat(temperatureValue.textContent);
 const windSpeed = parseFloat(windSpeedValue.textContent);
 const windChill = calculateWindChill(temperature, windSpeed);

 windChillValue.textContent = windChill;