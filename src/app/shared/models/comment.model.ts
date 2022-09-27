import { ReadUser } from './user.model';

export interface ReadComment {
  id: number;
  body: string;
  dateCreated: string;
  user?: ReadUser;
}

export interface AddComment {
  body: string;
  userId: number;
  postId: number;
}
