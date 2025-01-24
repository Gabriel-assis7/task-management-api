import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
    imports: [JwtModule.registerAsync({
        global: true,
        imports: [],
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: {expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME') || '3600s'}
        }),
        inject: [ConfigService],
    }), UsersModule],
    providers: [AuthService, UsersService],
    controllers: [AuthController]
})
export class AuthModule {}
