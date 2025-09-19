import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Status } from "./enums/estado";
import { Version } from "./enums/version";
import { TipoDocumento } from "./enums/tipoDocumento";

interface ApprovalsAttributes {
  id: string;
  url_documento: string;
  id_tramite: string;
  tipo_documento: TipoDocumento;
  hash_documento: string;
  descripcion: string;
  status: Status;
  version: Version;
  id_system: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ApprovalsCreationAttributes
  extends Partial<
    Pick<ApprovalsAttributes, "id" | "createdAt" | "updatedAt">
  > {}

@Table({ tableName: "Approvals", timestamps: true })
export default class Approvals extends Model<
  ApprovalsAttributes,
  ApprovalsCreationAttributes
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare url_documento: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare id_tramite: string;

  @Column({
    type: DataType.ENUM(...Object.values(TipoDocumento)),
    allowNull: false,
  })
  declare tipo_documento: TipoDocumento;

  @Column({ type: DataType.STRING, allowNull: false })
  declare hash_documento: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare descripcion: string;

  @Column({
    type: DataType.ENUM(...Object.values(Status)),
    allowNull: false,
  })
  declare status: Status;

  @Column({
    type: DataType.ENUM(...Object.values(Version)),
    allowNull: false,
  })
  declare version: Version;

  @Column({ type: DataType.STRING, allowNull: false })
  declare id_system: string;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
