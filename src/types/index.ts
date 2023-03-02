export type Symptom =
  | "HEAT_MOUNT_DETECTOR"
  | "TAIL_PAINT_RUBBED"
  | " NEAR_SAG_GROUP"
  | "VULVA_SIGNS"
  | "ARCHED_BACK"
  | "EXCITABLE"
  | "RIDING"
  | "STANDING";
export interface Cattle {
  cattleName: string;
  firstDetectedAt: Date;
  id: string;
  status: "DETECTED" | "ON_HEAT" | "NOT_ON_HEAT";
  symptoms: Symptom[];
}

export type CattleList = Cattle[];
