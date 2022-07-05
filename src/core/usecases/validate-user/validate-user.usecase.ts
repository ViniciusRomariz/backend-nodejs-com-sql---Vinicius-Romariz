import { Inject, Injectable } from "@nestjs/common";
import { IBaseUseCase } from "../base.usecase";
import { ValidateUserDto } from "./validate-user.dto";


@Injectable()
export class ValidateUserUseCase implements IBaseUseCase<
ValidateUserDto.Input,
Promise<ValidateUserDto.Output>
> {

    constructor(
    ) 
    {

    
    }    

    async execute(input: ValidateUserDto.Input): Promise<ValidateUserDto.Output> {

        
        let result; 

        if (input.login === 'ezer')
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
