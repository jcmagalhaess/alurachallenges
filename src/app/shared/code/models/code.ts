import { Comments } from '../../../core/layout/comment/comment';
export interface Codes extends Array<Code> {}

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

export interface CodesApi {
  payload: Codes;
}
