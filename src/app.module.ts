import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from './users/user.module';

@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  UserModule]
})
export class AppModule {}
