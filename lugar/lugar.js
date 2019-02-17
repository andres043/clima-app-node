const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const API_KEY = 'AIzaSyCV4ixksMGRaOIq73TS1wqLnuaBQ3WHObM';
    const encodeUrl = encodeURI(direccion);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${API_KEY}`;

    let resp = await axios.get(url);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección: ${direccion}`)
    }
    let results = resp.data.results[0];
    let location = results.geometry.location;

    return {
        direccion: results.formatted_address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLng
}