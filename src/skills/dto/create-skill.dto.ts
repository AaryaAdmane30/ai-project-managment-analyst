export class CreateSkillDto {
  skillName: string;
  level: string; // "Expert" | "Proficient" | "Intermediate" | "Beginner"
  experienceYears?: number;
  memberId: string;  // the TeamMember to assign this skill to
}
