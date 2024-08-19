const fs = require('fs');
const path = './citas.json';

function registrarCita(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    const citas = JSON.parse(fs.readFileSync(path, 'utf8'));
    citas.push(nuevaCita);

    fs.writeFileSync(path, JSON.stringify(citas, null, 2), 'utf8');
    console.log('Cita registrada con éxito');
}

function leerCitas() {
    const citas = JSON.parse(fs.readFileSync(path, 'utf8'));
    console.log(citas);
}

function eliminarCitas() {
    fs.writeFileSync(path, JSON.stringify([], null, 2), 'utf8');
    console.log('Todas las citas han sido eliminadas.');
}

module.exports = { registrarCita, leerCitas, eliminarCitas };

