export interface Cattle {
  cattleName: string;
  firstDetectedAt: Date;
  id: string;
  status: string; //TODO correct status enums
  symptoms: string[]; // TODO correct symtomd enums
}

export type CattleList = Cattle[];
