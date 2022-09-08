import { comment } from './comments.model';

export interface ReadPost {
  id: number;
  title: string;
  content: string;
  userId?: number;
  anonName: string;
  dateCreated: string;
  comments?: comment[];
}

export interface CreatePost extends ReadPost {}

export interface UpdatePost extends ReadPost {}
