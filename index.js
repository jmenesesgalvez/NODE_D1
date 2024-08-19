const { registrarCita, leerCitas, eliminarCitas } = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
    const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
    registrarCita(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leerCitas();
} else if (operacion === 'eliminar') {
    eliminarCitas();
} else {
    console.log('Operación no válida. Usa "registrar", "leer" o "eliminar".');
}
