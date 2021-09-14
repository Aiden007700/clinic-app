import { Module } from '@nestjs/common';
import { PaitentService } from './paitent.service';
import { PaitentController } from './paitent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paitent } from './entities/paitent.entity';
import { DoctorModule } from '../doctor/doctor.module';

@Module({
  imports: [TypeOrmModule.forFeature([Paitent]), DoctorModule],
  controllers: [PaitentController],
  providers: [PaitentService]
})
export class PaitentModule {}
