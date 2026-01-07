// src/ai/dto/create-ai.dto.ts
export class CreateAiDto {
  projectId: string;              // which project this AI suggestion is for
  laborCost?: number;             // suggested labor cost
  reworkCost?: number;            // suggested rework cost
  infrastructureCost?: number;    // suggested infrastructure cost
  totalSavings?: number;          // AI predicted total savings
  description?: string;           // optional note about the AI suggestion
  createdBy?: string;             // user id who triggered AI suggestion
}
