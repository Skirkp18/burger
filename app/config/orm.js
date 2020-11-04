var connection = require("./connection.js");

function createQuestionmarks(number) {
    const array = [];
    for (let i = 0; i < number.length; i++) {
        array.push("?");
    }
    return array.toString();
};

var orm = {
    selectAll: function (table, cb) {
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + createQuestionmarks(vals.length) + ");";
        console.log(queryString);
    },
    updateOne: function (table, objVals, condition, cb) {
        const queryString = "UPDATE " + table;

        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;