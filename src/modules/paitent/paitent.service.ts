import { Injectable } from '@nestjs/common';
import { CreatePaitentDto } from './dto/create-paitent.dto';
import { UpdatePaitentDto } from './dto/update-paitent.dto';

@Injectable()
export class PaitentService {
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
