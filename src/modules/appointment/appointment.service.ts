import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorService } from '../doctor/doctor.service';
import { PaitentService } from '../paitent/paitent.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentReposetory: Repository<Appointment>,
    private readonly doctorService: DoctorService,
    private readonly paitientService: PaitentService,
  ) {}
  async create(createAppointmentDto: CreateAppointmentDto) {
    const doctor = await this.doctorService.findOne(createAppointmentDto.doctorId)
    const paitent = await this.paitientService.findOne(createAppointmentDto.paitentId)
    const appointment = await this.appointmentReposetory.create(createAppointmentDto)
    appointment.doctor = doctor
    appointment.paitent = paitent
    return await this.appointmentReposetory.save(appointment);
  }

  async findAll() {
    return await this.appointmentReposetory.find()
  }

  async findOne(id: number) {
    return await this.appointmentReposetory.findOne({id}, {relations: ['doctor', 'paitent']})
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const _appointment = await this.findOne(id)
    if (updateAppointmentDto.doctorId && updateAppointmentDto.doctorId !== _appointment.doctorId) {
      const doctor = await this.doctorService.findOne(updateAppointmentDto.doctorId)
      _appointment.doctor = doctor
    }
    return await this.appointmentReposetory.save({
      ..._appointment,
      ...updateAppointmentDto
    })
  }

  async remove(id: number) {
    return this.appointmentReposetory.delete({id})
  }
}
