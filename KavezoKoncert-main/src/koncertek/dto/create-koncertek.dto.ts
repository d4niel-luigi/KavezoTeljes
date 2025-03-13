import { IsDateString, IsNotEmpty, IsNumber, IsString, MinDate } from "class-validator"

export class CreateKoncertekDto { 


  @IsString()
  @IsNotEmpty()
  performer:string

  @IsDateString()
  @IsNotEmpty()
  started_at: Date

  @IsNumber()
  @IsNotEmpty()
  lenght: number

}
