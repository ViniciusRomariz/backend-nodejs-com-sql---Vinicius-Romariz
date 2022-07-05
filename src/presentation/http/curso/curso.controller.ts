import { Controller, Get, UseGuards, Request, Query, Post, Body } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { filter } from "rxjs";
import { ListCoursesUseCase } from "src/core/usecases/list-courses/list-course.usecase";
import { JwtAuthGuard } from "src/presentation/auth/guards/jwt.guard";
import { RolesGuard } from "src/presentation/auth/guards/roles.guard";
import { Role } from "src/presentation/auth/roles/role.enum";
import { Roles } from "src/presentation/auth/roles/roles.decorator";
import { GetCourseListDto, GetCourseListQueryDto, PostCourseBodyDto, PostCourseResponseDto } from "./curso.dto";
import { GetCourseListAdapter } from "./get-course-list.adpter";


@ApiTags('courses')
@Controller('curso')
export class CursoController {
  
  constructor(
    
    private readonly _listCoursesUserCase: ListCoursesUseCase
    
    ) {
      
    }
    
  @Get()
  @ApiBearerAuth()
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getCourseList(
    @Query() filter: GetCourseListQueryDto,
    @Request() req: any
  ): Promise<GetCourseListDto.Response> {


    console.log(req.user);

    const usecaseParams = GetCourseListAdapter.requestToModel();
    
    const result = await this._listCoursesUserCase.execute(usecaseParams);
    
    return GetCourseListAdapter.modelToResponse(result);
  
  }

  @Post()
  @ApiBearerAuth()
  @Roles(Role.Admin, Role.User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async postCourse(
    @Body() body: PostCourseBodyDto,
    @Request() req: any
  ): Promise<PostCourseResponseDto> {


    console.log(body);
    
    return Promise.resolve({
      id: 0,
      ...body
    });

  
  }

}
