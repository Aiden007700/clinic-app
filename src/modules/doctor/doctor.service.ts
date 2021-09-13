import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorReposetory: Repository<Doctor>,
  ) {}
  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = await this.doctorReposetory.create(createDoctorDto);
    createDoctorDto.supervisingDoctorId && this.addSupervisingDoctor(doctor, createDoctorDto.supervisingDoctorId)
    return await this.doctorReposetory.save(doctor);
  }

  async findAll() {
    return await this.doctorReposetory.find();
  }

  async findOne(id: number) {
    return await this.doctorReposetory.findOne({ id });
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    const _doctor = await this.findOne(id);
    updateDoctorDto.supervisingDoctorId && this.addSupervisingDoctor(_doctor, updateDoctorDto.supervisingDoctorId)
    return await this.doctorReposetory.save({
      ..._doctor,
      ...updateDoctorDto,
    });
  }

  async remove(id: number) {
    return await this.doctorReposetory.delete({ id });
  }

  async addSupervisingDoctor(doctor: Doctor, supervisingDoctorId) {
    const supervisingDoctor = await this.findOne(supervisingDoctorId)
    doctor.supervisingDoctor = supervisingDoctor
    return doctor
  }
}
