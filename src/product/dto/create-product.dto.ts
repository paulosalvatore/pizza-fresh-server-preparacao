import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl, IsUUID } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição breve do produto',
    example: 'Queijo mussarela, massa fina, borda recheada',
  })
  description: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  image: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'Preço do produto',
    example: 12.34,
  })
  price: number;

  @IsUUID()
  @ApiProperty({
    description: 'Preço do produto',
    example: '12.34',
  })
  userId: string;
}
