import { Document } from 'mongoose';
import { User } from './user';

export interface Product extends Document {
  owner: User;
  titlte: string;
  description: string;
  image: string;
  price: string;
  creadted: Date;
}
