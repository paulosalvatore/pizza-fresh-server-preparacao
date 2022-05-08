import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { ChangeItemOrderDto } from './dto/change-item-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderChangedDto } from './dto/order-changed.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const isUserFound = await this.prisma.user.count({
      where: { id: dto.userId },
    });

    if (!isUserFound) {
      throw new NotFoundException('Usuário não existe.');
    }

    const isTableFound = await this.prisma.table.count({
      where: { number: dto.tableNumber },
    });

    if (!isTableFound) {
      throw new ForbiddenException('Mesa não existe.');
    }

    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      table: {
        connect: {
          number: dto.tableNumber,
        },
      },
      orderProducts: {
        createMany: {
          data: dto.products.map((product) => ({
            productId: product.productId,
            quantity: product.quantity,
            description: product.description,
          })),
        },
      },
    };

    return this.prisma.order.create({ data }).catch(handleError);
  }

  findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async findOne(id: string): Promise<Order> {
    const record = await this.prisma.order.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return record;
  }
}
