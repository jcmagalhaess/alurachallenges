import { Comments } from './../components/comment/comment';
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
  comments: Comments;
}

export type Codes = Array<Code>;
