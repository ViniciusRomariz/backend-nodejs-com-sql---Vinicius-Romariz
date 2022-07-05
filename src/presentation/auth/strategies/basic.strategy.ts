import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';
import { LoginUserUseCase } from 'src/core/usecases/login-user/login-user.usecase';


@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _loginUserUseCase: LoginUserUseCase,
  ) {
    super();
  }

  async validate(login: string, password: string): Promise<any> {

    const result = await this._loginUserUseCase.execute({
        login,
        password,
    });
      
    if (!result.user) 
        throw new UnauthorizedException();
            
    return result;

  }

}


