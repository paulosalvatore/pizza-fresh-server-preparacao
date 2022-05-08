import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data }).catch(handleError);
  }

  async findOne(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return record;
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    const data: Partial<Table> = { ...dto };

    return this.prisma.table
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    const isRecordFound = await this.prisma.table.findUnique({ where: { id } });

    if (!isRecordFound) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return this.prisma.table.delete({ where: { id } });
  }
}
