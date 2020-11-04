const orm = require("../config/orm.js");

let burger = {
    selectAllBurgers: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results);
        });
    },
    createBurger: function(name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },
    eatBurger: function(id, cb) {
        const condition = "id=" + id;
        orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
};

module.exports = burger;