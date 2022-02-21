
let obj=require('../logger/logger');
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
   // res.send('My first ever api!')
    //obj.printMessage('thorium');
    obj.welcome()
    //console.log(obj.welcome);

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reasonnc