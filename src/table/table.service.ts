import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { table } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
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

    return this.prisma.table.create({ data });
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    const isRecordFound = await this.prisma.table.findUnique({ where: { id } });

    if (!isRecordFound) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    const data: Partial<Table> = { ...dto };

    return this.prisma.table
      .update({
        where: { id },
        data,
      })
      .catch((error) => {
        const errorLines = error.message?.split('\n');
        const lastErrorLine = errorLines[errorLines.length - 1].trim();
        throw new UnprocessableEntityException(lastErrorLine);
      });
  }

  async delete(id: string) {
    const isRecordFound = await this.prisma.table.findUnique({ where: { id } });

    if (!isRecordFound) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return this.prisma.table.delete({ where: { id } });
  }
}
