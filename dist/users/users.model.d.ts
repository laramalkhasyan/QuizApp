import * as mongoose from 'mongoose';
export declare const UsersSchema: mongoose.Schema<any>;
export declare class Users extends mongoose.Document {
    name: string;
    surname: string;
    phone: string;
}
