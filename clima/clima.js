const axios = require('axios');

const getClima = async(lat, lng) => {
    const API_KEY = '2232c473f9924d788501fbf4856d5dcd';
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    let resp = await axios.get(url);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}