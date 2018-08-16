const express = require("express");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");

const app = express();

app.use(express.static("public"));

app.get("/api",(req,res) => {
    res.json({
        message: "Welcome to the API"
    });
});

// verifyToken ist einfach nur eine weitere Funktion wie diejenige die direkt als Callback übergeben wird.
// Callbacks in express' http Aufrufen sind middleware. Die Requests arbeiten sich durch die middlewares durch.
// Um den Request an die nächte middleware weiterzureichen benötigt man den Funktionsaufruf next();
app.post("/api/posts",middleware.verifyToken,(req,res) => {
    // req.token is set in the verifyToken middleware
    jwt.verify(req.token,"secretkey", (err,decoded) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created!",
                decoded
            }); 
        }
    });
   
});

app.post("/api/login",(req,res) => {
    // Mock User
    const user = {
        id: 1,
        username: "Joseph",
        email: "jojo@gmail.com"
    }
    
    // Anstatt nur den User als json zurtückzuliefern, wird er in einem jwt initialisiert
    // und zusammen mit einem key als Antwort gesendet
    jwt.sign({user},"secretkey",(err,token) => {
        res.json({
            token
            // Das Objekt sieht so aus:
            // token = {token: "aaaa.bbbb.cccc"}
        });
    });
});

app.listen(5000, () => {
    console.log("Server started on 5000");
});