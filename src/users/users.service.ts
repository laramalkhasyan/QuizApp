import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL') private readonly usersModel: Model<Users>,
  ) {}

  async addsUser(user: Users) {
    const newUser = new this.usersModel({
      name: user.name,
      surname: user.surname,
      phone: user.phone,
    });
    const result = await newUser.save();
    return result;
  }

  async getUsers() {
    const users = await this.usersModel.find().exec();
    return users;
  }
}
