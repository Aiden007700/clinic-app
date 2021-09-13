import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateDoctorDto {
    @IsString()
    name: string

    @IsString()
    phoneNumber: string

    @IsNumber()
    @Type(() => Number) 
    doctorSpecialtyNumber: number

    @IsString()
    doctorSpecialty: string

    @IsNumber()
    @IsOptional()
    @Type(() => Number) 
    supervisingDoctorId?: number
}
