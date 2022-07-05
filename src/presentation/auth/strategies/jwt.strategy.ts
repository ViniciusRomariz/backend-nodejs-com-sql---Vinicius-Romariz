import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ValidateUserUseCase } from 'src/core/usecases/validate-user/validate-user.usecase';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    
    private readonly _validateUserUseCase: ValidateUserUseCase

  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SALT,

    });
  }

  async validate(payload: any) {

    console.log(payload);

    const checkResponse = await this._validateUserUseCase.execute({
      login: payload.sub,
      path: ""
    }
    );

    return checkResponse;

  }
}

