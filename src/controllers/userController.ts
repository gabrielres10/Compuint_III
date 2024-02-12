import {Request, Response} from 'express';
import userService from '../services/userService'
import { UserDocument } from '../models/userModels';
import { UserInput } from '../models/userModels';
import bcrypt from 'bcrypt';

class UserController {

    public async create(req: Request, res: Response){
        try{
            const userExists: UserDocument | null = await userService.findByEmail(req.body.email);

            req.body.password = await bcrypt.hash(req.body.password, 10);
            if (userExists){
                return res.status(400).json({message: "User already exists"});
            }

            const newUser: UserDocument = await userService.create(req.body as UserInput);

            return res.status(201).json(newUser);

        }catch (error) {
            return res.status(500).json(error);
        }
    }

    public async getUsers(req: Request, res: Response) {
        try{
            const users = await userService.findAll();
            res.json(users);
        }catch (error) {
            return res.status(500).json(error);
        }
    }

    public async findById(req: Request, res: Response){
        try{

        }catch (error) {
            return res.status(500).json(error);
        }
    }

    public async update(req: Request, res: Response){
        try{
            const userExists: UserDocument | null = await userService.findById(req.params.id);
            if(!userExists)
                return res.status(404).json({message: "User not found"});

            if(req.body.password)
                req.body.password = await bcrypt.hash(req.body.password, 10);

            const updateUser: UserDocument = await userService.update(userExists);

            return res.status(201).json(updateUser);

        }catch (error) {
            return res.status(500).json(error);
        }
    }

    public async delete(req: Request, res: Response){
        try{

        }catch (error) {
            return res.status(500).json(error);
        }
    }
}
export default new UserController();