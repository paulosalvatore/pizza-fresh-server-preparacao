import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class ChangeItemOrderDto {
  @IsArray()
  @IsNotEmpty()
  @IsUUID(undefined, {
    each: true,
  })
  @ApiProperty({
    example: '["abbb7373-c58c-4c14-bd06-c7ae0a703ea7"]',
  })
  productsIds: string[];
}
