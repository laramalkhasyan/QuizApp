import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const UsersSchema = new mongoose.Schema({
  // _id: Number,
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: String, required: true },
});

export class Users extends mongoose.Document {
  // id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  phone: string;
}
