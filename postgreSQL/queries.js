const pgp = require("pg-promise")(/*options*/);

const conexion = {
     host: "localhost",
     port: 5432,
     database: "dvdrental",
     user: "postgres",
     password: "SN191012?",
     max: 30 // use up to 30 connections
};

const db = pgp(conexion);

// const mapArrayIntoObject = (array) => {
//      return array.reduce((accumulator, current) => {
//           accumulator[current.customer_id] = current;
//           return accumulator;
//      }, {});
// };

const getCustomers = () => {
     return db.query("SELECT * FROM Customer limit 15")
          .then(function (data) {
               return data;
          })
          .catch(function (error) {
               console.log(error);
          });
};

const getActors = () => {
     return db.query("SELECT * FROM Actor limit 15")
          .then(function (data) {
               return data;
          })
          .catch(function (error) {
               console.log(error);
          });
};


module.exports = {
     getCustomers,
     getActors
};