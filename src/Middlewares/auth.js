//Middleware functions
function adminAuth(req, res, next) {
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if (!isAuthorized){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }    
}

function userAuth(req, res, next) {
    const token = "user";
    const isAuthorized = token === "user";
    if (!isAuthorized){
        res.status(401).send("Unauthorized access");
    }
    else{
        next();
    }  
}

module.exports = {
    adminAuth,
    userAuth
}