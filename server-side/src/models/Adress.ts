import { 
    Association, DataTypes, Model, Sequelize,
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManySetAssociationsMixin
} from 'sequelize';
import { User } from './User';

export class Address extends Model {
    public id!: number;
    public name!: string;
    public tel!: number;
    public email!: string;
    public address!: string;
    public created_at!: Date;

    public static associations: {
        Users: Association<Address, User>;
    }

    public static initialize(sequelize: Sequelize){
        this.init({
            id: {
                type: DataTypes.STRING,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {tableName: 'addresses', sequelize: sequelize});
    }
}