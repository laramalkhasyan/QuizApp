import { Model } from 'mongoose';
import { Users } from './users.model';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<Users>);
    addUser(name: string, surname: string, phone: string): Promise<string>;
    getUsers(): Promise<any>;
}
