export namespace ValidateUserDto {

    export type Input = {
        login: string;
        path: string;
    }


    export type Output = {
        user:  any;
    }

}
