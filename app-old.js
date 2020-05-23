//http es una libreria propia de node por eso no hay que instalar nada
const http = require('http');

//para poder escuchar peticiones http primero tenemos que crear el servidor
// hay que especificar el puerto que esta escuchando por ej 8080 o 3000
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'Marisol',
            apellido: 'Gamba',
            edad: 99,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end(); //para decirle que ya terminamos de crear la respusta.

    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');