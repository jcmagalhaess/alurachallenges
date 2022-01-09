export interface Code {
  id?: number;
  title: string;
  description: number;
  syntax: number;
  color: string;
  code: string;
}

export type Codes = Array<Code>;
