import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eleuterio@2022',
    database: 'eshop'
});
 connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
}
);

export = connection;