// src/epics/epics.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEpicDto } from './dto/create-epic.dto';
import { UpdateEpicDto } from './dto/update-epic.dto';

@Injectable()
export class EpicService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateEpicDto) {
    return this.prisma.epic.create({ data: dto });
  }

  findAll() {
    return this.prisma.epic.findMany({
      include: { project: true, tasks: true },
    });
  }

  findOne(id: string) {
    return this.prisma.epic.findUnique({
      where: { id },
      include: { project: true, tasks: true },
    });
  }

  update(id: string, dto: UpdateEpicDto) {
    return this.prisma.epic.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.epic.delete({
      where: { id },
    });
  }
}
