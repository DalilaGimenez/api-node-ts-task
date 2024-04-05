import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Token from './token.entity'
import Task from './task.entity'
import User from './user.entity'

@Entity()
export default class Phone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  phone!: string

  @ManyToOne(() => User, user => user.phone)
  user!: User
}