import { z } from "zod";

export enum ResumeEnum {
  SV = "1km7uiHYyKv6tFtB88mlnBUz0X_ul6niH1skeUSYcfZk",
  EN = "1aiG05-57zXsPsyKlgHrA4I10K1C-Ziy-kvV4fmMZims",
}

export interface ResumeData {
  fileName: string;
  id: ResumeEnum;
}

export const Resumes: Record<string, ResumeData> = {
  SV: {
    fileName: "CV-Lowe",
    id: ResumeEnum.SV,
  },
  EN: {
    fileName: "Resumé-Lowe",
    id: ResumeEnum.EN,
  },
};

export const ResumeValidator = z.object({
  id: z.nativeEnum(ResumeEnum),
});

export type ResumeRequest = z.infer<typeof ResumeValidator>;
