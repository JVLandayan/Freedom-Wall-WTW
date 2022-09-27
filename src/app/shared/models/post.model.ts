import { ReadComment } from './comment.model';
import { ReadUser } from './user.model';

export interface ReadPost {
  id: number;
  title: string;
  content: string;
  user: ReadUser;
  dateCreated: string;
  comments: ReadComment[];
}
export interface AddOrUpdatePost {
  userId: number;
  title: string;
  content: string;
}
