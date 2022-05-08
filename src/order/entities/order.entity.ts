import { Product, Status } from '@prisma/client';

export class Order {
  id?: string;
  status: Status;
  userId: string;
  tableId: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}
