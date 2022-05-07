import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Descrição breve do produto',
    example: 'Queijo mussarela, massa fina, borda recheada',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })
  @IsUrl()
  image: string;

  @ApiProperty({
    description: 'Preço do produto',
    example: '12.34',
  })
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  price: number;
}
