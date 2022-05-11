import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { nickname: string }) {
    const user = await this.prismaService.user.findUnique({
      where: { nickname: payload.nickname },
    });

    if (!user) {
      throw new NotFoundException('Usuário não existe ou não está autenticado');
    }

    delete user.password;

    return user;
  }
}
