// src/performance/performance.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';

@Injectable()
export class PerformanceService {
  constructor(private prisma: PrismaService) {}

  // Create new performance history entry
  create(dto: CreatePerformanceDto) {
    return this.prisma.performanceHistory.create({
      data: dto,
    });
  }

  // Get all performance entries
  findAll() {
    return this.prisma.performanceHistory.findMany({
      include: { member: true }, // Include team member info
    });
  }

  // Get a single performance entry by ID
  findOne(id: string) {
    return this.prisma.performanceHistory.findUnique({
      where: { id },
      include: { member: true },
    });
  }

  // Update performance entry
  update(id: string, dto: UpdatePerformanceDto) {
    return this.prisma.performanceHistory.update({
      where: { id },
      data: dto,
    });
  }

  // Delete performance entry
  remove(id: string) {
    return this.prisma.performanceHistory.delete({
      where: { id },
    });
  }
}
