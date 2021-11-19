import { Bean } from 'src/entity'
import { UserRole } from 'src/types'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class User extends Bean {
  @Column({ type: 'varchar' })
  firstName: string

  @Column({ type: 'varchar' })
  lastName: string

  @PrimaryColumn({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar', select: false })
  password: string
}
