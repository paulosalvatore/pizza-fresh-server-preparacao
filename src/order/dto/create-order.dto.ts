import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do Usuário',
    example: '3eb54f96-136c-449e-b8d2-3a2463bf838b',
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
  @ApiProperty({
    description:
      'Lista de produtos no pedido, incluindo quantidade e observações',
    type: [CreateOrderProductDto],
  })
  products: CreateOrderProductDto[];
}
