import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do Usuário',
    example: 'ca7b81d4-b6fb-4e9c-a7f2-3d150cc385dd',
  })
  userId: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa',
    example: 1,
  })
  tableNumber: number;

  @ValidateNested({
    each: true,
  })
  @Type(() => CreateOrderProductDto)
  products: CreateOrderProductDto[];
}
