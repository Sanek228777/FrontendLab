export interface Project {
  id: number;
  name: string;
  description: string;
  details?: string;
  technology: string;
  author: string;
  createdAt: Date;
}
