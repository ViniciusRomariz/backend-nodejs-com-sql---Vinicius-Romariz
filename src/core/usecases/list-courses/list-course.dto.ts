type  ListCourseUseCaseItemType = {

    id: number;
    description: string;

}


export namespace ListCourseUseCaseDto {

    export type Input = {
        filter: Record<string, any>;
    }


    export type Output = {
        data:  ListCourseUseCaseItemType[];
    }

}
