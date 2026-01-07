// src/project/project.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsController } from './projects.controller';
import { ProjectService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectService, PrismaService],
  exports: [ProjectService],
})
export class ProjectModule {}






