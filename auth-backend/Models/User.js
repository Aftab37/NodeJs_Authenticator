// nodeJs_authenticator\auth-backend\models\user.js

const mysqlpool = require('./db');

module.exports = class User {
    constructor(name, email, password) {
        this.name = name; 
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return mysqlpool.execute('SELECT * FROM user WHERE email = ?', [email])
    }

    static save(user) {
        return mysqlpool.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]
        );
    }
};