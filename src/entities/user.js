import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({ name : 'users'})
export class User {
    @PrimaryColumn()
    id

    @Column({type: 'varchar',length: 50})
    email

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at
    
    @DeleteDateColumn()
    deleted_at
}