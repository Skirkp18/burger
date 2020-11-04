var connection = require("./connection.js");

function createQuestionmarks(number) {
    const array = [];
    for (let i = 0; i < number.length; i++) {
        array.push("?");
    }
    return array.toString();
};

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
  }
  
var orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += createQuestionmarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;