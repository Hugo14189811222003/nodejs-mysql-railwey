const {config} = require('dotenv');
config();

module.exports.PORT = process.env.PORT || 3001;
module.exports.BD_PORT = process.env.BD_PORT || 3306;
module.exports.BD_USER = process.env.BD_USER || 'root';
module.exports.BD_PASSWORD = process.env.BD_PASSWORD || 'hugoarcoszuñiga141898';
module.exports.BD_DATABASE = process.env.BD_DATABASE || 'userPerson';
module.exports.BD_HOST = process.env.BD_HOST || 'localhost';