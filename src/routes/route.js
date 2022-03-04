const express = require('express');

const router = express.Router();

const Controller= require("../controllers/controllers")

  router.get("/test-me", function (req, res) {

      res.send("My first ever api!")
      
      })

router.get("/harry1", Controller.testOne)
router.get("/harry2", Controller.testTwo)



module.exports = router;