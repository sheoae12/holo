const express = require("express"); 
const app = express();
const port = 3002; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");

var temp;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'holo',
	password: 'kitce2022*',
	database: 'document_post'
});

app.get('/', (req, res) =>{
    const sql = "select * from document_post";
	con.query(sql, function(err,result,fields) {
		if(err) throw err;
		res.send(result);
	});
})



app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})

