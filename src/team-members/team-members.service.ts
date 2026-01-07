import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class TeamMemberService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTeamMemberDto) {
    return this.prisma.teamMember.create({ data: dto });
  }

  findAll() {
    return this.prisma.teamMember.findMany({
      include: {
        user: true,
        skills: true,
        tasks: true,
        performanceHistory: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.teamMember.findUnique({
      where: { id },
      include: {
        user: true,
        skills: true,
        tasks: true,
        performanceHistory: true
      }
    });
  }

  update(id: string, dto: UpdateTeamMemberDto) {
    return this.prisma.teamMember.update({
      where: { id },
      data: dto
    });
  }

  remove(id: string) {
    return this.prisma.teamMember.delete({
      where: { id }
    });
  }
}
