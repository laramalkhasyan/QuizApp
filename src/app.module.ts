import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    UsersModule,
    // SwaggerModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://codeepUser:SP8CIBl935qPJF0C@cluster0-o0wpi.mongodb.net/QuizApp?retryWrites=true&w=majority',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
