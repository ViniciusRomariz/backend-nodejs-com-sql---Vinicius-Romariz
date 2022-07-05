import { ApiProperty } from "@nestjs/swagger";
import { type } from "os";
import { ResultError } from "../error/result.error";


export class GetCourseListDtoResponseItemType {
    
    @ApiProperty({ description: 'course\'s identity', example: 10 })
    id: number;

    @ApiProperty({ description: 'course\'s description', example: 'olá mundo' })
    description: string;

}


export class GetCourseListQueryDto {
    
    @ApiProperty({
        required: false,
        example: "teste",
        description: ""
    })
    description?: string;

    @ApiProperty({
        required: false,
        example: "active",
        description: ""
    })
    status?: string;

}


export class PostCourseBodyFinancialDto {

    @ApiProperty({
        example: 100.00
    })
    amount: number;

}

export class PostCourseBodyDto {
    
    @ApiProperty({
        example: "teste 0"
    })
    description: string;

    @ApiProperty({
        example: "2022-10-01"
    })
    startDate: string;

    @ApiProperty({
        example: {
            amount: 300.00
        }
    })
    financial: PostCourseBodyFinancialDto;


}

export class PostCourseResponseDto {
    
    @ApiProperty()
    id: number;

    description: string;
    startDate: string;

}

export class GetCourseListDtoResponseType {
    
    @ApiProperty({example: [{id: 0, description: 'teste 0'}]})
    data: GetCourseListDtoResponseItemType[];
}




export namespace GetCourseListDto {

    export type Response = GetCourseListDtoResponseType | ResultError

}  
