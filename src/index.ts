import express,{Express, Response, Request} from 'express';

const app : Express = express();
import dotenv from 'dotenv';
import db from './config/db';
import routes from './routes';

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const app = require('express')();

const port = process.env.PORT || 1234;

app.get('/', (req, res) => {res.send('Hello World');}); //Cuando se encuentre con la ruta "/" (vacía) ejecuta lo que está dentro del método


app.get('/hola', (req, res) => {res.send('About Us');}); //Cuando se encuentre con la ruta "/" (vacía) ejecuta lo que está dentro del método




app.post('/about', (req,res) => {
    res.send("name: " + req.body.name);
});

db.then(
    ()=>{
        app.listen(port, () =>{
            console.log(`Server is running on port ${port}`);
        });
    }
).catch(
    (err) => console.error(err)
);

routes(app); // Ejecuta los métodos dentro de routes.