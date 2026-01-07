// src/epic/epic.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EpicController } from './epics.controller';
import { EpicService } from './epics.service';

@Module({
  controllers: [EpicController],
  providers: [EpicService, PrismaService],
  exports: [EpicService],
})
export class EpicModule {}
