import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {DateResult} from "./DateResult";
import {Action} from "./Action";
import {JoinColumn} from "typeorm";

@Entity()
export class DateE {
    @PrimaryGeneratedColumn()
    id: number

    @Column('date')
    date: Date

    @OneToMany(() => Action, action => action.date)
    actions: Action[]

    @OneToOne(() => DateResult, dateResult => dateResult.dateE)
    @JoinColumn()
    dateResult: DateResult
}