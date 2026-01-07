// skill.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSkillDto) {
    return this.prisma.skill.create({ data: dto });
  }

  findAll() {
    return this.prisma.skill.findMany({
      include: { member: true },
    });
  }

  findOne(id: string) {
    return this.prisma.skill.findUnique({
      where: { id },
      include: { member: true },
    });
  }

  update(id: string, dto: UpdateSkillDto) {
    return this.prisma.skill.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.skill.delete({
      where: { id },
    });
  }
}
