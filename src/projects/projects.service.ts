import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Project } from '@prisma/client';

import { CreateProjectDto } from './dto/create-project.dto';

import { UpdateProjectDto } from './dto/update-project.dto';

// project.service.ts
@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateProjectDto) {
    return this.prisma.project.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.project.findMany({
      include: { manager: true, epics: true },
    });
  }

  findOne(id: string) {
    return this.prisma.project.findUnique({
      where: { id },
      include: { manager: true, epics: true },
    });
  }

  update(id: string, dto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
