import { UsersService } from './users.service';
import { Users } from './users.model';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: Users): Promise<Users>;
    getAllUsers(): Promise<Users[]>;
}
