import { Appointment } from "src/modules/appointment/entities/appointment.entity";
import { Doctor } from "src/modules/doctor/entities/doctor.entity";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Paitent {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phoneNumber: string;

    @Column()
    emai: string

    @Column()
    address: string

    @CreateDateColumn()
    addDate: Date

    @Column()
    allergies: string

    @Column()
    doctorId: number

    @ManyToOne(() => Doctor)
    @JoinColumn()
    doctor: Doctor

    @OneToMany(() => Appointment, appointment => appointment.paitent)
    appointment: Appointment[]
}
