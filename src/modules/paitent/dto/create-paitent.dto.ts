import { Type } from 'class-transformer';
import { IsNumber, isNumber, IsString } from 'class-validator';

export class CreatePaitentDto {
  @IsString()
  name: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  emai: string;

  @IsString()
  address: string;

  @IsString()
  allergies: string;

  @IsNumber()
  @Type(() => Number)
  doctorId: number;
}
