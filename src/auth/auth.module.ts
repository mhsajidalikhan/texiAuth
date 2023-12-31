import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtService,JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken-strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy,JwtStrategy, UserService,RefreshJwtStrategy],
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
   secret: `${process.env.jwt_secret}`,
   
    signOptions: { expiresIn: '60s' },
  })],

  
})
export class AuthModule {}
