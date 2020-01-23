import { Model } from 'mongoose';
import { Users } from './users.model';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<Users>);
    addsUser(user: Users): Promise<Users>;
    getUsers(): Promise<Users[]>;
}
