import express,{Express, Response, Request} from 'express';

const app : Express = express();
import dotenv from 'dotenv';


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const app = require('express')();

const port = process.env.PORT || 1234;

app.get('/', (req, res) => {res.send('Hello World');}); //Cuando se encuentre con la ruta "/" (vacía) ejecuta lo que está dentro del método


app.get('/hola', (req, res) => {res.send('About Us');}); //Cuando se encuentre con la ruta "/" (vacía) ejecuta lo que está dentro del método


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

app.post('/about', (req,res) => {
    res.send("name: " + req.body.name);
});