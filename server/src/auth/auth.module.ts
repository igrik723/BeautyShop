import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { getJwtConfig } from "src/config/jwt.config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [UserModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getJwtConfig
        })],
    controllers: [AuthController],
    providers: [JwtStrategy, AuthService],
    exports: [JwtModule]
})

export class AuthModule {}