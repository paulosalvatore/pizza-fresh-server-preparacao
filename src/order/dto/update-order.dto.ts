import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ChangeItemOrderDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  orderId: string;

  @IsArray()
  @IsNotEmpty()
  @IsUUID(undefined, {
    each: true,
  })
  @ApiProperty()
  productsId: string[];
}
