import * as mongoose from 'mongoose';
export declare const UsersSchema: any;
export interface Users extends mongoose.Document {
    name: string;
    surname: string;
    phone: string;
}
