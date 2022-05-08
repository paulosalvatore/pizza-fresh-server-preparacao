import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class ChangeItemOrderDto {
  @IsArray()
  @IsNotEmpty()
  @IsUUID(undefined, {
    each: true,
  })
  @ApiProperty()
  productsIds: string[];
}
