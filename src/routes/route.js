const express = require('express');

const router = express.Router();



router.get('/movies', function (req, res) {
   res.send('["Fukrey","Delhi","Dabang","Rockstar","suryawansh"]')
});


router.get('/movies/:movieId', function(req,res){
mov =["Fukrey","Delhi","Dabang","Rockstar","suryawansh"]
 let value = req.params.movieId;
 if(value>mov.length-1)
 {
     res.send("doesnt exist")
 }
 else
 { res.send(mov[value])

 }
})

router.get('/moviez',function(req,res){
   res.send([ {id: 1,name:'The Shining' }, {id: 2, name:'Incendies' }, {id: 3,name: 'Rang de Basanti'}, {id: 4, name: 'welcome' },{id: 5, name: 'Finding Demo' }])
})

router.get('/films/:filmId', function(req,res){
   let movie=[ {id: 1,name:'The Shining' }, {id: 2, name:'Incendies' },{id: 3,name: 'Rang de Basanti'}, {id: 4, name: 'welcome' },{id: 5, name: 'Finding Demo' }]
    let value =req.params.filmId;
    let found=false;
    for(let i=0;i<movie.length;i++)
    {
        if(movie[i].id==value){
            found= true
            res.send(movie[i])
            break
        }
    }
    if(found == false)
    {
        res.send("No movie exits with this id ")
    }

})



module.exports = router;
// adding this comment for no reason../