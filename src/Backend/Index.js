
const {mongoose}  = require('./database')
const app = require('./app')


async function main() { //conexion con el servidor en especifico el puerto
    await app.listen(app.get('port'))
    console.log('Server on port', app.get('port'));
}

main();