// src/task/task.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TasksController } from './task.controller';
import { TaskService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService, PrismaService],
  exports: [TaskService],
})
export class TaskModule {}
