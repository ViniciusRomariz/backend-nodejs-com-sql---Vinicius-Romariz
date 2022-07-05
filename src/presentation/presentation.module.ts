import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CoreModule } from "src/core/core.module";
import { CursoController } from "./http/curso/curso.constroller";
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from "./auth/strategies/basic.stategy";
import { AuthController } from "./http/auth/auth.controller";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { RolesGuard } from "./auth/guards/roles.guard";
import { LoggerMiddleware } from "./http/middleware/logger.middleware";
@Module({
    imports: [
        CoreModule,
        PassportModule
    ],
    providers: [
        BasicStrategy,
        JwtStrategy,
        RolesGuard
    ],
    controllers: [
        AuthController,
        CursoController
    ],
})
export class PresentationModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
      }
}
