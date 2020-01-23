import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersModule } from './users.module';
import { Users } from './users.model';
import { ApiBody, ApiHeader } from '@nestjs/swagger';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @ApiQuery({ name: 'User', type: Users })
  // @ApiHeader({ name: 'token' })
  @Post()
  // @ApiBody({ type: [Users] })
  async create(@Body() user: Users) {
    const userId = await this.usersService.addsUser(user);
    return userId;
  }

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getUsers();
    return users;
  }
}
