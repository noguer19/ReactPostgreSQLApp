// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import queries from "./../postgreSQL/queries";

const cors = require("cors");

const path = require("path");

const config = require("./config");

const app = express();

app.use(express.static("public"));

const corsOptions = {
     origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.set("view engine", "ejs");

app.get(/^\/(?!api).*/, (req, res) => {
     res.sendFile(path.resolve("views/index.html"));
});

app.get("/api/customers", (req, res) => {
     try {
          const result = queries.getCustomers();
          result.then(function (data) {
               res.json(data);
          }).catch(function (error) {
               res.error(error);
          });

     } catch (error) {
          return res.send(error);
     }

});

app.get("/api/actors", (req, res) => {
     try {
          const result = queries.getActors();
          result.then((response) => {
               res.json(response);
          }).catch(error => {
               res.error(error);
          });
     }
     catch (error) {
          return res.send(error);
     }
});

app.get("/api/actors/:id", (req, res) => {
     try {
          const result = queries.getFilmsByActorId(req.params.id);
          result.then((response) => {
               res.json(response);
          }).catch(error => {
               res.error(error);
          });
     }
     catch (error) {
          return res.send(error);
     }
});

app.get("/api/films", (req, res) => {
     try {
          const result = queries.getFilms();
          result.then((response) => {
               res.json(response);
          }).catch(error => {
               res.error(error);
          });
     }
     catch (error) {
          return res.send(error);
     }
});


app.get("/api/films/:id", (req, res) => {
     try {
          const result = queries.getFilmById(req.params.id);
          result.then((response) => {
               res.json(response);
          }).catch(error => {
               res.error(error);
          });
     }
     catch (error) {
          return res.send(error);
     }
});



app.listen(config.port, function () {
     console.info(`Running on port: ${config.port}`);
});
