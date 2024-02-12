import User from "../models/userModels";
import UserModel, {UserInput, UserDocument} from "../models/userModels"

class UserService{


    public async findAll(): Promise<UserDocument[]> {
        try{
            const users = await UserModel.find();
            return users;
        }catch (error){
            throw error;
        }
    }

    public async findByEmail(email: string): Promise<UserDocument | null> {
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch (error){
            throw error;
        }
    }

    public async create(user: UserInput): Promise<UserDocument> {
        try{
            const newUser = await UserModel.create(user);
            return newUser;
        }catch (error){
            throw error;
        }
    }
    
    
}

export default new UserService();