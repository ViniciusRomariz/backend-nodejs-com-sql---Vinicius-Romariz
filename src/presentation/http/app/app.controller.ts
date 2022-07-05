import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';
import { AppDto } from '../../../app.dto';
import { AppService } from '../../../app.service';


export class HelloBodyRequestDto {
  
  @IsString()
  @IsNotEmpty()
  nome:string;

}


export class HelloParamRequestDto {
  
  @IsString()
  @IsNotEmpty()
  id:string;

}


@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {
    
  }

  @Get()
  getHello(): string {

    return this.appService.getHello();

  }

}


