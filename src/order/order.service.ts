import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';
import { ChangeItemOrderDto } from './dto/update-order.dto';
import { Status } from './entities/status.enum';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
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

  findAll() {}

  findOne(id: string) {}

  removeItem(id: string, changeItemOrderDto: ChangeItemOrderDto) {}

  addItem(id: string, changeItemOrderDto: ChangeItemOrderDto) {}

  closeOrder(id: string) {}
}
