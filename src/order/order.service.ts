import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';
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

    return this.prisma.order
      .create({
        data,
        include: {
          table: true,
          orderProducts: true,
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            orderProducts: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        orderProducts: {
          select: {
            quantity: true,
            description: true,
            product: {
              select: {
                name: true,
                image: true,
                price: true,
              },
            },
          },
        },
      },
    });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return record;
  }
}
