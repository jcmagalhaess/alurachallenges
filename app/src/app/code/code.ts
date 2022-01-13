export interface Code {
  id?: number;
  title: string;
  description: string;
  syntax: string;
  color: string;
  code: string;
  countLike: number;
  statusLike: boolean;
  countComment: number;
  comments: [];
}

export type Codes = Array<Code>;
