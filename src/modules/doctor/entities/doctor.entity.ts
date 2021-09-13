import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
}
