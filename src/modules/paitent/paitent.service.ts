import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorService } from '../doctor/doctor.service';
import { CreatePaitentDto } from './dto/create-paitent.dto';
import { UpdatePaitentDto } from './dto/update-paitent.dto';
import { Paitent } from './entities/paitent.entity';

@Injectable()
export class PaitentService {

  constructor(@InjectRepository(Paitent) private readonly paitentReposetory: Repository<Paitent>,
  private readonly doctorService: DoctorService) {}

  create(createPaitentDto: CreatePaitentDto) {
    return 'This action adds a new paitent';
  }

  findAll() {
    return `This action returns all paitent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paitent`;
  }

  update(id: number, updatePaitentDto: UpdatePaitentDto) {
    return `This action updates a #${id} paitent`;
  }

  remove(id: number) {
    return `This action removes a #${id} paitent`;
  }
}
