import { Controller, Get } from "@nestjs/common";
import { ListCourseUseCaseDto } from "src/core/usecases/list-courses/list-course.dto";
import { ListCoursesUseCase } from "src/core/usecases/list-courses/list-course.usecase";
import { GetCourseListDto } from "./curso.dto";


export class GetCourseListAdapter {
        
  constructor() {
  
  }

  static requestToModel(

  ) : ListCourseUseCaseDto.Input {

    return {
      filter: {}
    }

  }


  static modelToResponse(
    courseList: ListCourseUseCaseDto.Output
  ): GetCourseListDto.Response {

    return {
      data: [

        ... courseList.data.map(item => {

          return {
            id: item.id,
            description: item.description,
          }
        })
      ]
    } 

  }


}
