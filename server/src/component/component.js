const mysql = require("mysql");
const env = require("dotenv").config();
const connnection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  insecureAuth: process.env.insecureAuth,
  database: process.env.database,
});
connnection.connect((err) => {
  if (!err) {
    console.log("MYSQL IS CONNECTED");
  } else {
    console.log(err);
  }
});

/*connnection.query("CREATE DATABASE cruddb", (err, result) => {
  if (!err) {
    console.log("DATABASE IS CREATED");
  } else {
    console.log(err);
  }
});*/

/*var sql =
  "CREATE TABLE user(id INT NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL,location VARCHAR(255),PRIMARY KEY(id))";
connnection.query(sql, (err, result) => {
  if (!err) {
    console.log("TABLE IS CREATED");
  } else console.log(err);
});*/

exports.postData = async (req, res) => {
  const { name, location } = req.body;
  let sql = `INSERT INTO user (name,location) VALUES('${name}','${location}')`;
  await connnection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ messsage: result, response: "new reocord is add" });
    console.log("data is added");
  });
};
exports.getDataa = async (req, res) => {
  var sql = "SELECT * FROM user";
  await connnection.query(sql, (err, result, field) => {
    if (err) throw err;
    res.status(200).json({ message: result });
    console.log(result);
  });
};
exports.getData = async (req, res) => {
  var sql = "SELECT * FROM user WHERE id=" + req.params.id;
  await connnection.query(sql, (err, result, field) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: result }));
    console.log(result);
    console.log("DATA IS RETRIVE FROM DATABASE");
  });
};
exports.updatee = (req, res) => {
  //const { name, location } = req.body;
  //let id = req.params.id;
  var sql =
    "UPDATE user SET name='" +
    req.body.name +
    "',location='" +
    req.body.location +
    "' WHERE id=" +
    req.body.id +
    "";
  connnection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: "Record updated SuccessFully",
      })
    );

    console.log(result);
    console.log("DATABASE IS UPDATE");
  });
};
exports.deleteData = async (req, res) => {
  var sql = "DELETE FROM user WHERE id=" + req.params.id + "";
  await connnection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({ messsage: result, response: "Delete record" });
    console.log("DATA IS DELETE FROM DATABASE ");
  });
};
