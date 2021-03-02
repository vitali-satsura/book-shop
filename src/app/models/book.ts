import { Category } from './category';

export interface IBook {
  id: string;
  name: string;
  img: string;
  author: string;
  description: string;
  price: number;
  category: Category;
  createDate: number;
  isAvailable: boolean;
}
