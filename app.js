const argv = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp} °C`;
    } catch (err) {
        return `No se pudo determinar el clima en ${direccion}`.red;
    }

}

getInfo(argv.direccion)
    .then((msg) => console.log(msg.green))
    .catch((err) => console.log(err.red));