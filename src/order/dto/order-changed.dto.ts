import { Order } from '../entities/order.entity';

export class OrderChangedDto {
  order: Order;
  orderTotal: number;
}
