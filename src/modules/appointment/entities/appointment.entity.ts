import { Doctor } from "src/modules/doctor/entities/doctor.entity";
import { Paitent } from "src/modules/paitent/entities/paitent.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    apointmentDate: string

    @Column()
    doctorId: number

    @Column()
    paitentId: number

    @ManyToOne(() => Doctor, doctor => doctor.appointment)
    doctor: Doctor

    @ManyToOne(() => Paitent, paitent => paitent.appointment)
    paitent: Paitent

    @Column()
    appointmentBloodPresure: number

    @Column()
    appointmentNots: string

    @Column()
    appointmentMeds: string
}
