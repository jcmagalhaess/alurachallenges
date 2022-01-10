export interface Code {
  id?: number;
  title: string;
  description: number;
  syntax: number;
  color: string;
  code: string;
  likes?: string;
  count?: number
}

export type Codes = Array<Code>;
