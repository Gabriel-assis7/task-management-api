import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task)
        return { message: "Task created successfully"}
    }

    @Get('/:id')
    findById(@Param('id') id:string): TaskDto {
        return this.taskService.findById(id)
    }

    @Get()
    findAll(@Query() params: FindAllParameters): TaskDto[] {
        return this.taskService.findAll(params)
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task)
        return { message: "Task updated successfully"}
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        this.taskService.delete(id)
        return { message: "Task deleted successfully"}
    }
}