import { Options, Sequelize } from 'sequelize'
import { User } from './User';
import { Address } from './Adress';
import config from '../config.json';

const sequelize = new Sequelize(
    config.database.database,
    config.database.username,
    <Options> config.database
);

let models = [User, Address];

models.map(model => model.initialize(sequelize));

User.hasMany(Address);
Address.belongsTo(User);

sequelize.sync({ force : true});

export {
    sequelize as Database,
    User, Address
}