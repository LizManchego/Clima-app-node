const Clima = require('./Clima/clima');
const Lugar = require('./Lugar/lugar');
const arguments = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;
console.log(arguments.direccion);

// lugar.getLugarLatLng(arguments.direccion)
//     .then(console.log);

// Clima.getClima(7, -73)
//     .then(console.log)
//     .catch(console);

const getInfo = async(direccion) => {

    try {
        const coord = await Lugar.getLugarLatLng(direccion);
        const tempera = await Clima.getClima(coord.lat, coord.lng);
        return `El clima de ${direccion} es de ${tempera}.`
    } catch (e) {
        return `NO se encontro resultados para el clima de ${direccion}.`
    }

};

getInfo(arguments.direccion)
    .then(console.log)
    .catch(console.log);