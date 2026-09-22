import express from 'express';
import 'dotenv/config'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/weather', async (req, res) => {
    const { city } = req.body;

    if (!city) {
        return res.status(400).json({error: "City's name not informed"});
    }

    try {
        const geoRul = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`;
        const geoRes = await fetch(geoRul);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            return res.status(404).json({error: 'City not found'});
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        res.json({ name, country, weatherData});
    } catch (err) {
        console.error('Weather Error:', err);
        res.status(500).json({error: 'Failed to fetch weather data'});
    }
});

app.post('/api/gemini', async (req, res) => {
    const { weatherData } = req.body;

    if (!weatherData) {
        return res.status(400).json({ error: 'Weather data not informed'});
    }

    const prompt = `
        You are a weather forecast assistant.
        Based on this JSON weather data, write a short (2 to 4 sentences),
        natural, and useful summary in English, including a practical tip
        (e.g., whether an umbrella, coat, or sunscreen is needed).
        Do not invent numbers that are not in the data.
        Focus more on a practical tip than just giving technical details.

        Data: ${JSON.stringify(weatherData, null, 2)}
    `;

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent`;

        const GeminiRes = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': process.env.GEMINI_API_KEY
            },
            body: JSON.stringify({
                contents: [{ parts: [{text: prompt}] }],
                generationConfig: {
                    maxOutputTokens: 150
                }
            }),
        });

        const GeminiData = await GeminiRes.json();

        if (!GeminiRes.ok) {
            return res.status(GeminiRes.status).json(GeminiData);
        }

        const text = GeminiData.candidates[0].content.parts[0].text;

        res.json({ text });

    } catch (err) {
        console.error('Gemini Error:', err);
        res.status(500).json({ error: 'Failed to generate AI summary'});
    }
});

app.listen(3000, () => {
    console.log('Backend running on port 3000');
});