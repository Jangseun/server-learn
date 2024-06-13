const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/ha", (req, res) => {
    res.sendFile(__dirname + "/ha.html");
});

app.listen(port, () => {
    console.log(`${port}에서 서버가 실행됐어요.`);
});