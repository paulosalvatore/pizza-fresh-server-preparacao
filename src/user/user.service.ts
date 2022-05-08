import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    nickname: true,
    password: false,
    name: true,
    image: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException('Senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleError);
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return record;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('Senhas informadas não são iguais.');
      }
    }

    delete dto.confirmPassword;

    const data: Partial<User> = {
      ...dto,
    };

    if (data.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    const isRecordFound = await this.prisma.user.findUnique({ where: { id } });

    if (!isRecordFound) {
      throw new NotFoundException(`ID ${id} não encontrado.`);
    }

    return this.prisma.user.delete({
      where: { id },
      select: this.userSelect,
    });
  }
}
