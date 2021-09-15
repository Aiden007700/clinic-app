import { Appointment } from 'src/modules/appointment/entities/appointment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  doctorSpecialtyNumber: number;

  @Column()
  doctorSpecialty: string;

  @Column({ nullable: true })
  supervisingDoctorId: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.id)
  @JoinColumn()
  supervisingDoctor?: Doctor;

  @OneToMany(() => Appointment, appointment => appointment.doctor)
  appointment: Appointment[]
}
