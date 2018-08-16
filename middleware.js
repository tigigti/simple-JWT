//Middleware to verify the incoming request through jwt
const verifyToken = (req,res,next) => {
    // Get the header value
    const bearerHeader = req.get("authorization");

    // Check if bearer is undefined
    if(typeof bearerHeader !== "undefined"){
         // Format of Token
        // Authorization: Bearer <access_token>
        // Split the token at space
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken: verifyToken
}