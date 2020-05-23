const express = require('express');
const app = express();

//estamos configurando una peticion get cuando el path sea '/' 
//en express hay que crear un mildware, que nos va a permitir filtrar cualquier peticion
//un midellware es una instruccion o callback que se va a ejecutar siempre
//no importa  que url es el que se pida 
//para crear un midelware bastaria con hacer app.use y especificar un callback o funcion
//En este caso hay que especificar el folder que sea publico y tenga el contenido estatico
//http://localhost:3000/   muestra el index
//no se mostaria la confiracion de app.get dependiendo del interprete 
//http://localhost:3000/home  Da un error porque busca un folder home que tenga un index dentro
//http://localhost:3000/home.html  en este caso si se mostraria el home.html
//http://localhost:3000/assets/css/bootstrap.css  me lo mostraria porque esta en public
app.use(express.static(__dirname + '/public')); //hace publico un directorio


//en este caso no es necesario indicar que es un json
// En postman, en los headers, las propiedades que empiezan X, son headers personalizados
//En app-old alli escuchabamos tdas las peticiones sin importar la url


app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    let salida = {
        nombre: 'Marisol',
        apellido: 'Gamba',
        edad: 99,
        url: req.url
    };
    res.send(salida);
});
//sin embargo si colocamos http://localhost:3000/data 
//es necesario crear otra configuracion como la siguinte
app.get('/data', (req, res) => {

    res.send('Hola data');

});

//aqui  se recibe un callback que se va a disparar una vez el servidor se levante 
//y se imprimiria el mensaje en consola
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 300');
});