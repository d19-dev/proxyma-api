import { PrimaryGeneratedColumn } from 'typeorm'

export abstract class Bean {
  @PrimaryGeneratedColumn('uuid')
  id: string
}
