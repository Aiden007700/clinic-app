import { Module } from '@nestjs/common';
import { DoctorModule } from './modules/doctor/doctor.module';
import { AppointmentModule } from './modules/appointment/appointment.module';
import { PaitentModule } from './modules/paitent/paitent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './modules/doctor/entities/doctor.entity';

@Module({
  imports: [DoctorModule, AppointmentModule, PaitentModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    entities: [Doctor],
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}