import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorService } from '../doctor/doctor.service';
import { CreatePaitentDto } from './dto/create-paitent.dto';
import { UpdatePaitentDto } from './dto/update-paitent.dto';
import { Paitent } from './entities/paitent.entity';

@Injectable()
export class PaitentService {
  constructor(
    @InjectRepository(Paitent)
    private readonly paitentReposetory: Repository<Paitent>,
    private readonly doctorService: DoctorService,
  ) {}

  async create(createPaitentDto: CreatePaitentDto) {
    const doctor = await this.doctorService.findOne(createPaitentDto.doctorId);
    const paitent = await this.paitentReposetory.create(createPaitentDto);
    paitent.doctor = doctor;
    return await this.paitentReposetory.save(paitent);
  }

  async findAll() {
    return await this.paitentReposetory.find();
  }

  async findOne(id: number) {
    return await this.paitentReposetory.findOne({ id });
  }

  async update(id: number, updatePaitentDto: UpdatePaitentDto) {
    const _paitent = await this.findOne(id);
    return await this.paitentReposetory.save({
      ..._paitent,
      ...updatePaitentDto,
    });
  }

  async remove(id: number) {
    return await this.paitentReposetory.delete(id)
  }
}
