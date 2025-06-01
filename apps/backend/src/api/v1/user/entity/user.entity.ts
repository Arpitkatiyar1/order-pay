import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'contact' })
  contact: string;

  @Column({ name: 'created_by', nullable: true })
  created_by: string;
}
