import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto): Promise<LoginResponseDto> {
    const { nickname, password } = data;

    const user = await this.prismaService.user.findUnique({
      where: { nickname },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ nickname }),
      user: user,
    };
  }
}
