// src/performance/dto/create-performance.dto.ts
export class CreatePerformanceDto {
  taskType: string;           // e.g., "API Development", "UI Design"
  avgCompletionTime?: number; // in hours
  qualityScore?: number;      // 0-10 scale
  completedTasks?: number;    // default 0
  memberId: string;           // team member this record belongs to
}
