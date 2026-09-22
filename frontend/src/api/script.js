export async function getWeatherByCity(event) {
    event.preventDefault();
    
    const searchTitle = document.querySelector('.title');
    const searchBox = document.querySelector('.search-form');
    const loading = document.querySelector('.loading');
    const AIloading = document.querySelector('.gemini-loading');
    const AIfeedback = document.querySelector('.ai-feedback');
    const searchAgain = document.querySelector('.search-again');

    searchTitle.style.display = 'none';
    searchBox.style.display = 'none';
    AIfeedback.style.display = 'none';
    searchAgain.style.display = 'none';
    loading.style.display = 'flex';

    const input = document.querySelector('.search-input');
    const result = document.querySelector('.results');
    const cityTitle = document.querySelector('.city-title');
    const dataSection = document.querySelector('.data-section');
    const AI_answer = document.querySelector('.ai-answer');

    let weatherData;

    try {
        const res = await fetch('/api/weather', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ city: input.value})
        });

        if (!res.ok) throw new Error('City not found');

        const data = await res.json();
        weatherData = data.weatherData;

        cityTitle.innerHTML = `${data.name}, ${data.country}`;

        dataSection.innerHTML = `
            <p><strong>Temp.</strong> <i class="bx bx-tachometer"></i> ${weatherData.current.temperature_2m}°C</p>
            <p><strong>Max.</strong> <i class="bx bx-sun"></i> ${weatherData.daily.temperature_2m_max[0]}°C</p>
            <p><strong>Min.</strong> <i class="bx bx-cloud"></i> ${weatherData.daily.temperature_2m_min[0]}°C</p>
            <p><strong>Hum.</strong> <i class="bx bx-droplet"></i> ${weatherData.current.relative_humidity_2m}%</p>
            <p><strong>Wind</strong> <i class="bx bx-wind"></i> ${weatherData.current.wind_speed_10m} km/h</p>
        `;
    } catch (err) {
        alert("We couldn't find the data! Please, try again.");
        console.error('Weather Error:', err);
        return;
    }

    loading.style.display = 'none';
    result.style.display = 'flex';

    try {
        const GeminiRes = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                weatherData
            })
        });

        if (!GeminiRes.ok) throw new Error('Gemini request failed');

        const GeminiData = await GeminiRes.json();

        AIloading.style.display = 'none';
        AIfeedback.style.display = 'flex';
        searchAgain.style.display = 'flex';

        AI_answer.textContent = GeminiData.text;
    } catch (err) {
        alert("We couldn't use the AI.");
        console.error('Gemini Error:', err);
    }


}