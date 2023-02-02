import { Table, Model, Column, DataType } from "sequelize-typescript";
import { UserEntity } from "@src/User/domain/user.entity";
import bcryptjs from "bcryptjs";
@Table({
  timestamps: false,
  tableName: "User",
})
export class User extends Model<UserEntity> {
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
  static async encryptPassword(password: string): Promise<string> {
    return bcryptjs.hash(password, 10);
  }
  async validatePassword(password: string): Promise<boolean> {
    return await bcryptjs.compare(password, this.password);
  }
}
