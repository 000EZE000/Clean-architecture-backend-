import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "User",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  id!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  phoneNumber!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}
