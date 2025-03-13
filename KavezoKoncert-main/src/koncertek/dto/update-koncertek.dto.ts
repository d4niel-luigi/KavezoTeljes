import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertekDto } from './create-koncertek.dto';
import { IsOptional, IsString, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class UpdateKoncertekDto extends PartialType(CreateKoncertekDto) {

    @IsString()
    @IsOptional()
    performer:string
  
    @IsDate()
    @IsOptional()
    started_at: Date
  
    @IsNumber()
    @IsOptional()
    lenght: number
  
    @IsBoolean()
    @IsOptional()
    fail: boolean
}
