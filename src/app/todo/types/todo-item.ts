export interface TodoItem {
  title: string;
  content?: string;
  done: boolean;
  deleted: boolean;
  doneDate?: Date;
}
