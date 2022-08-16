const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eleuterio@2022',
    database: 'eshop_online'

})



 connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
}
);







module.exports = connection;