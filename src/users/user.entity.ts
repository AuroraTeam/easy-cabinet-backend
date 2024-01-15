import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid', { unique: true, generated: 'uuid' })
  uuid: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  accessToken: string;

  @Column({ nullable: true })
  serverId: string;

  @Column({ nullable: true })
  skinUrl: string;

  @Column({ nullable: true })
  capeUrl: string;

  @Column({ nullable: true })
  isAlex: boolean;
}
