import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { InfraModule } from "src/infra/infra.module";
import { GenerateJwtUseCase } from "./usecases/generate-jwt/generate-jwt.usecase";
import { ListCoursesUseCase } from "./usecases/list-courses/list-course.usecase";
import { LoginUserUseCase } from "./usecases/login-user/login-user.usecase";
import { ValidateUserUseCase } from "./usecases/validate-user/validate-user.usecase";

@Module({
    imports: [
        InfraModule,
        JwtModule.register({
            secret: process.env.JWT_SALT,
            signOptions: { expiresIn: '12h' },
          }),
    ],
    controllers: [],
    providers: [
        GenerateJwtUseCase,
        ListCoursesUseCase,
        LoginUserUseCase,
        ValidateUserUseCase
    ],
    exports: [
        GenerateJwtUseCase,
        ListCoursesUseCase,
        LoginUserUseCase,
        ValidateUserUseCase
    ]
})
export class CoreModule {}
