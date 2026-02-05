
export enum Location {
  MONG_KOK = 'MONG_KOK',
  CAUSEWAY_BAY = 'CAUSEWAY_BAY'
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface LocationInfo {
  id: Location;
  name: string;
  subName: string;
  calendlyUrl: string;
  address: string;
}
