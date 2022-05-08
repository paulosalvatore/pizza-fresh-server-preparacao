import { Product } from 'src/product/entities/product.entity';

export class Order {
  id?: string;
  userId: string;
  tableId: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}
