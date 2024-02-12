import {Express}  from 'express';
import userController from '../controllers/userController';

const routes = (app: Express) => {
    app.get('/users', userController.getUsers);
    app.post('/users', userController.create);
}

export default routes;