const apiKey = "e3c03bc457a2bca1463a28cfbf66b5a4";
const form = document.querySelector("form");
const stadInput = document.getElementById("stad");
const weatherTableBody = document.querySelector("tbody");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let stad = stadInput.value;
    if (stad) {
        weatherTableBody.innerHTML = "";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${stad}&appid=${apiKey}`
        let response = await fetch(url);
        let weather = await response.json();
        for (let i = 0; i < weather.list.length; i++) {
            let weatherPrediction = weather.list[i];
            let row = document.createElement("tr");

            let timestamp = new Date(weatherPrediction.dt * 1000); // dt is tijd in seconden sinds 1/1/1970. Vandaar x 1000 om milliseconden te hebben.
            let tempInCelsius = (weatherPrediction.main.temp - 273.15).toFixed(1); // temp is in Kelvin. Kelvin naar Celsius omzetten is relatief eenvoudig (-273.15 aftrekken).
            let description = weatherPrediction.weather[0].description; // In principe kunnen er meerdere rijen in weather zitten. Wij halen gewoon de eerste rij eruit.

            row.innerHTML = `
                <td>${timestamp.toLocaleString()}</td>
                <td>${tempInCelsius}</td>
                <td>${description}</td>`;
            weatherTableBody.appendChild(row);
        }
    }
});
