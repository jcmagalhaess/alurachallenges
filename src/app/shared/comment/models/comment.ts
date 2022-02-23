export interface Comment {
  codeId: number;
  id: number;
  date: string;
  text: string;
}

export type Comments = Array<Comment>;
