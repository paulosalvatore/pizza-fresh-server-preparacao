import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTableDto {
  @ApiProperty({
    description: 'Número da mesa',
    example: 1,
  })
  @IsNumber()
  number: number;
}
