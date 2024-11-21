var express = require("express");
var router = express.Router();
const authRoute = require("./auth.route");

router.use(
  "/auth",
  authRoute
  /* 
    #swagger.tags = ['Auth']

    #swagger.security = [{
        "apiKeyAuth": []
    }] 
    */
);

module.exports = router;
