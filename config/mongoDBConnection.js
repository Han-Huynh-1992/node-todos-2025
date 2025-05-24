let config = require('./mongoDBConfig.json');

module.exports = {
    getDBConnectionString: () => {
        return `mongodb+srv://${config.userName}:${config.password}@testmongodb.6ojtbxp.mongodb.net/to-do-data`;
    }
};
