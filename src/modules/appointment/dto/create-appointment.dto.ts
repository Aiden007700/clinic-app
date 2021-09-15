import { Type } from "class-transformer"
import { IsNumber, IsString } from "class-validator"

export class CreateAppointmentDto {

    @IsString()
    apointmentDate: string

    @IsNumber()
    @Type(() => Number)
    doctorId: number

    @IsNumber()
    @Type(() => Number)
    paitentId: number

    @IsNumber()
    @Type(() => Number)
    appointmentBloodPresure: number

    @IsString()
    appointmentNots: string

    @IsString()
    appointmentMeds: string
}
