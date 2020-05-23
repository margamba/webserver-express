const express = require('express');
const app = express();


const hbs = require('hbs');

require('./hbs/helpers');

//Esta linea se pone porque vamos a subir la apliacion a heroku y no conocemos cual sera el puerto
//si la corremos en local queremos que tome el 3000
const port = process.env.PORT || 3000

//para incluir contenido dinamico usamos handelbars, debemos instalar npm install hbs

app.use(express.static(__dirname + '/public')); //hace publico un directorio

//Express HBS engine
//Para cosas reutilizables  como el header o el footer, los estilos usamos parciales
//los parciales son bloques de codigo html que podemos reutilizar
//es mas util utilizare un folder que tenga todos los parciales

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'marisol gamba'
    });
});

app.get('/about', (req, res) => {


    res.render('about');
});

//si fuese en local
// app.listen(3000, () => {
//     console.log('Escuchando peticiones en el puerto 300');
// });

//para subir a heroku
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});