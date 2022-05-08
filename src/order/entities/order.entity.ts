import { Status } from './status.enum';

export class Order {
  id?: string;
  status: Status;
  userId: string;
  tableId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
