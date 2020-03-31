
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
import { Address } from './Adress';
// const sequelize = new Sequelize('postgres://postgres:@127.0.0.1:5432/secret_board');

export class User extends Model {
    public id!: number;
    public uid!: string;
    public name!: string;
    public tel!: number;
    public email!: string;
    public address!: string;
    public created_at!: Date;

    public getAddress!: HasManyGetAssociationsMixin<Address>;
    public createAddress!: HasManyCreateAssociationMixin<Address>;
    public addAddress!: HasManyAddAssociationMixin<Address, number>;
    public removeAddress!: HasManyRemoveAssociationMixin<Address, number>;

    public readonly addresses?: Address[];

    public static associations: {
        addresses: Association<Address>;
    }

    public static initialize(sequelize: Sequelize){
        this.init({
            id: {
                type: DataTypes.NUMBER,
                autoIncrement: true,
                primaryKey: true
            },
            uid: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tel: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
        }, { tableName: 'users', sequelize: sequelize })
    }
}