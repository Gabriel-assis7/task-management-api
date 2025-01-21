import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Post()
    create(@Body() user: UserDto) {
        this.UsersService.create(user);
    }
    
}
