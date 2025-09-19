import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Status } from "./enums/estado";

interface SystemAttributes {
  id: string;
  name: string;
  dominio: string;
  ip: string;
  status: Status;
  token: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SystemCreationAttributes
  extends Partial<Pick<SystemAttributes, "id" | "createdAt" | "updatedAt">> {}

@Table({ tableName: "Systems", timestamps: true })
export default class System extends Model<
  SystemAttributes,
  SystemCreationAttributes
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare dominio: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare ip: string;

  @Column({
    type: DataType.ENUM(...Object.values(Status)),
    allowNull: false,
    defaultValue: Status.ACTIVE,
  })
  declare status: Status;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
