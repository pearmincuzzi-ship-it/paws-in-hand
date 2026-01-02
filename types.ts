
export enum LogType {
  VET = 'VET',
  WEIGHT = 'WEIGHT',
  BEHAVIOR = 'BEHAVIOR',
  MEDICATION = 'MEDICATION',
  NOTE = 'NOTE'
}

export interface DogLog {
  id: string;
  date: string; // ISO string (YYYY-MM-DD)
  type: LogType;
  title: string;
  description: string;
  value?: string; // e.g., weight in kg
}

export interface SeniorCareTip {
  id: number;
  category: 'Health' | 'Diet' | 'Behavior' | 'Comfort';
  title: string;
  content: string;
  icon: string;
}

export type ViewMode = 'CALENDAR' | 'KNOWLEDGE' | 'LOGS';
