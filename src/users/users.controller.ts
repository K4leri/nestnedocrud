import { Body, Controller, Get, HttpException, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/crete.user.dto";
import mongoose from "mongoose";

@Controller('users')
export class UserController {

    constructor(private userService: UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() CreateUserDto: CreateUserDto) {
        console.log(CreateUserDto)
        return this.userService.createUser(CreateUserDto)
    }

    @Get()
    getUsers () {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById (@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('User not found', 404)
        const findUser = await this.userService.getUserById(id)
        if (!findUser) throw new HttpException('User not found', 404)
        // console.log(findUser)
        return findUser
    }
} 