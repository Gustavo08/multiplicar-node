const argv = require('./config/yargs').argv;
const colors = require('colors');
const color = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch ( comando ) {

  case 'listar':
    listarTabla(argv.base, argv.limite);
  break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
     .then( archivo => console.log(`Archivo creado:`, color.green(archivo)))
     .catch( err => console.log(err));
  break;

  default :
    console.log('Comando no reconocido');
}
//let argv2 = process.argv;

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
