// create-project.dto.ts
export class CreateProjectDto {
  name: string;
  description?: string;
  managerId: string;
  startDate?: Date;
  endDate?: Date;
  status?: string;
  laborCost?: number;
  reworkCost?: number;
  infrastructureCost?: number;
  totalSavings?: number;
}
