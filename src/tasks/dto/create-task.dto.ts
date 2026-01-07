export class CreateTaskDto {
  title: string;
  description?: string;
  requiredSkills: string[];
  priority?: string;
  status?: string;
  estimatedHours?: number;
  startDate?: Date;
  endDate?: Date;
  dependencyTaskId?: string;
  epicId: string;
  assignedToId?: string;
}
