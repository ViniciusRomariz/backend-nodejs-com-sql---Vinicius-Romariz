import { Inject, Injectable } from "@nestjs/common";
import { IBaseUseCase } from "../base.usecase";
import { LoginUserDto } from "./login-user.dto";


@Injectable()
export class LoginUserUseCase implements IBaseUseCase<
LoginUserDto.Input,
Promise<LoginUserDto.Output>
> {

    constructor(
    )
     {
    
    }    

    async execute(input: LoginUserDto.Input): Promise<LoginUserDto.Output> {


        let result; 

        if (input.login === 'ezer' && input.password === '123')
            result = {
                login: input.login,
                name: 'ezer assis silva de mello',
                type: 'user',
            }

        return {
            user: result
        }
    }

}
