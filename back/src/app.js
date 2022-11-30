const express = require("express");
const { routes } = require("./routes");
const cors = require("cors");
const server = express();
const morgan = require("morgan");
const { CORS } = process.env;

server.use(morgan("dev"));

server.use(express.json());
server.use(cors({
    origin: CORS,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-type', 'Accept', 'Access-Control-Allow-Origin'],
}))

server.use("/api", routes);

module.exports = server;
