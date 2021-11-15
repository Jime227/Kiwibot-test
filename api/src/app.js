const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const express = require("express");
const routes = require("./routes");
const app = express();

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCfVj3XBo15fP01wH1gAewarI-YQ-dGq54",
  authDomain: "kiwibot-test.firebaseapp.com",
  projectId: "kiwibot-test",
  storageBucket: "kiwibot-test.appspot.com",
  messagingSenderId: "597154002512",
  appId: "1:597154002512:web:2c97983c293525902d8355",
  measurementId: "G-47FT05GY4M",
});

const db = getFirestore();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);
app.listen(3001, () => {
  console.log("listening at 3001");
});
module.export = {
  db,
};
