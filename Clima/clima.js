const axios = require('axios');

const getClima = async(lat, lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff5a43b4d7b3791e5aa7b7d7acdc87ca&units=metric`
    });

    const resp = await instance.get();
    if (resp.data.weather.length === 0) {
        throw new Error(`No se encuantra resultados `);
    }


    const grados = resp.data.main.temp;


    return grados;
}




module.exports = {
    getClima
}