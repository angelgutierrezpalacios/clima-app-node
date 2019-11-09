const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

var lat = 0;
var lng = 0;




const getInfo = async(direccion) => {
    try {
        const coor = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coor.lat, coor.lng);
        return `El clima de ${ coor.direccion } es de ${ temp }`
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);