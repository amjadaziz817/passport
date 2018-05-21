import {
  Controller,
  Get, 
  Post, 
  Body, 
  Param, 
  Delete,
  Put
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import {UserDTO} from './dto/user.dto';
import {User} from './interfaces/user.interface';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async create(@Body() user: UserDTO) {
    this.userService.create(user);
  }

  @ApiOperation({ title: 'Reterives all users' })
  @ApiResponse({
    status: 200,
    description: 'Fetches all users',
  })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/:id')
  @ApiOperation({ title: 'Fetch user by id' })
  @ApiResponse({
    status: 200,
    description: 'Fetch user by provided id',
  })
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Put()
  @ApiOperation({ title: 'Update user' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully modified.',
  })
  async update(@Body() user: UserDTO) {
    this.userService.update(user);
  }

  @ApiOperation({ title: 'Delete user' })
  @ApiResponse({
    status: 200,
    description: 'Delete user by id',
  })
  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUserById(id);
  }
}
