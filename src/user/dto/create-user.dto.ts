import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome de usuário para login. Deve ser único',
    example: 'paulosalvatore',
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Paulo Salvatore',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@123',
  })
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação de senha deve ser igual a senha',
    example: 'Abcd@123',
  })
  confirmPassword: string;

  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://avatars.githubusercontent.com/u/7906171',
  })
  @IsUrl()
  image: string;
}
