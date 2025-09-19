import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";
import { StatusNotificado } from "./enums/estadoNotificado";
import Approvals from "./Approvals.model";

interface NotificationAttributes {
  id: string;
  approvalId?: string;
  status: StatusNotificado;
  introducido: boolean;
  request_uuid?: string;
  codigo_operacion?: string;
  mensaje?: string;
  transaction_id?: string;
  fecha_solicitud?: string;
  hash_datos?: string;
  ci?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface NotificationCreationAttributes
  extends Partial<
    Omit<NotificationAttributes, "id" | "createdAt" | "updatedAt">
  > {}

@Table({ tableName: "NotificationApprovals", timestamps: true })
export default class NotificationApprovals extends Model<
  NotificationAttributes,
  NotificationCreationAttributes
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @ForeignKey(() => Approvals)
  @Column({ type: DataType.UUID, allowNull: true })
  declare approvalId?: string;

  @Column({
    type: DataType.ENUM(...Object.values(StatusNotificado)),
    allowNull: false,
  })
  declare status: StatusNotificado;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  declare introducido: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  declare request_uuid?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare codigo_operacion?: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare mensaje?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare transaction_id?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare fecha_solicitud?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare hash_datos?: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare ci?: string;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
