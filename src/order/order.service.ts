import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma, Status } from '@prisma/client';
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
      where: {
        number: dto.tableNumber,
        orders: {
          none: { status: Status.OPEN },
        },
      },
    });

    if (!isTableFound) {
      throw new ForbiddenException(
        'Mesa não existe ou já possui um pedido aberto no momento.',
      );
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

  private async canOrderBeProcessed(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      select: { status: true },
    });

    if (!order) {
      throw new NotFoundException(`Pedido não encontrado.`);
    }

    if (order.status === Status.CLOSED) {
      throw new UnprocessableEntityException('Pedido está fechado.');
    }
  }

  async addItem(
    id: string,
    changeItemOrderDto: ChangeItemOrderDto,
  ): Promise<OrderChangedDto> {
    await this.canOrderBeProcessed(id);

    // Etapa 1
    // const products: Prisma.ProductUpdateManyWithoutOrdersInput = {
    //   connect: changeItemOrderDto.productsIds.map((productId) => {
    //     const object: Prisma.ProductWhereUniqueInput = {
    //       id: productId,
    //     };

    //     return object;
    //   }),
    // };

    // Etapa 2
    const products: Prisma.ProductUpdateManyWithoutOrdersInput = {
      connect: changeItemOrderDto.productsIds.map((productId) => ({
        id: productId,
      })),
    };

    const data: Prisma.OrderUpdateInput = {
      products,
    };

    const order = await this.prisma.order.update({
      where: { id },
      data,
      include: { products: true },
    });

    const orderTotal = order.products.reduce(
      (prev, curr) => prev + curr.price,
      0,
    );

    return {
      order,
      orderTotal,
    };
  }

  removeItem(id: string, changeItemOrderDto: ChangeItemOrderDto) {}

  closeOrder(id: string) {}
}
