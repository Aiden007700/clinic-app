import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaitentService } from './paitent.service';
import { CreatePaitentDto } from './dto/create-paitent.dto';
import { UpdatePaitentDto } from './dto/update-paitent.dto';

@Controller('paitent')
export class PaitentController {
  constructor(private readonly paitentService: PaitentService) {}

  @Post()
  create(@Body() createPaitentDto: CreatePaitentDto) {
    return this.paitentService.create(createPaitentDto);
  }

  @Get()
  findAll() {
    return this.paitentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paitentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaitentDto: UpdatePaitentDto) {
    return this.paitentService.update(+id, updatePaitentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paitentService.remove(+id);
  }
}
