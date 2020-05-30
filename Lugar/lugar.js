const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "6194107336mshc59a376fb486664p161e29jsn102021198a57"
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encuantra resultados par al ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}




module.exports = {
    getLugarLatLng
}