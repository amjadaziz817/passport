import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    
    async create(userDTO: UserDTO): Promise<User> {
        const createdUser = new this.userModel(userDTO);
        return await createdUser.save();
    }

    async getAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getById(id): Promise<User> {
        return await this.userModel.findById(id).exec();
    }
    async update(userDTO: UserDTO): Promise<User> {
        const updatedUser = new this.userModel(userDTO);
        return await Model.findByIdAndUpdate(updatedUser.id, {
            first_name: userDTO.first_name,
            last_name: userDTO.last_name,
            email: userDTO.email,
            age: userDTO.age
        });
    }
    async deleteUserById(id): Promise<User> {
        return await this.userModel.findByIdAndRemove(id).exec();
    }
}
