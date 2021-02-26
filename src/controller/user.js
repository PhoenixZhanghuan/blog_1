const { exec, escape } = require('../db/mysql')
const { getPassword } = require('../utils/cryp');

const login = (username, password) => {
    username = escape(username);
    
    password = getPassword(password);
    password = escape(password);

    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `;

    console.log('sql is ', sql);
    
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}