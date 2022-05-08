import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  create(dto: CreateProductDto): Promise<Product> {
    const data: Product = { ...dto };

    return this.prisma.product.create({ data }).catch(handleError);
  }

  async findOne(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return record;
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    const data: Partial<Product> = { ...dto };

    return this.prisma.product
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    const isRecordFound = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!isRecordFound) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
