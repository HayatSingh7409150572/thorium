const obj =require('../logger/logger');
 const obj1=require('../util/helper')
 const obj2=require('../validator/formatter')
const lodash = require('lodash')

const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.welcome('Welcome to my application. I am Mohd jafar and a part of FunctionUp Thorium cohort.')
    obj1.printDate();
    obj1.printMonth();
    obj1.getBatchInfo();
    console.log(obj2.stringTrim('  functionUp   '));
    console.log(obj2.lowerCase('fUNCTionUp'));
    console.log(obj2.upperCase('functionUp'));
        
 res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
    console.log(lodash.chunk(['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEP','OCT','NOV','DEC'],3))
    console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
    console.log(lodash.union([2],[1,2],[3,3,4,2],[9,8,4,3],[1,1,2,2,3]))
    console.log(lodash.fromPairs([['horror','The Shining',],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))
  
    res.send('My second ever api!')
});



module.exports = router;
// adding this comment for no reason../
