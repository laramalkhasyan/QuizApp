import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(name: string, surname: string, phone: string): Promise<string>;
    getAllUsers(): Promise<any>;
}
