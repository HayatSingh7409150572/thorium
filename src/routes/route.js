const { application } = require('express');
const express = require('express');

const router = express.Router();



//router.get('/movies', function (req, res) {
   //res.send('["Fukrey","Delhi","Dabang","Rockstar","suryawansh"]')
//})

//Assignment1
 router.post('/players', function(req, res){


let players  = [ {

            "name": "manish",
  
             "dob": "1/1/1995",
  
              "gender": "male",
  
                "city": "jalandhar",
  
                  "sports": [
  
                    "swimming"
  
                          ],
  
                   "bookings": [
  
   
                                 ]   },

                                            
          {

             "name": "jafar",
  
    "dob": "1/1/1985",
  
    "gender": "male",
  
    "city": "lucknow",
  
    "sports": [
  
      "football"
  
    ],
  
    "bookings": [
  
   
    ]
  
  },
  {

    "name": "hayat",
  
    "dob": "24/8/1999",
  
    "gender": "male",
  
    "city": "roorkee",
  
    "sports": [
  
      "cricket"
  
    ],
  
    "bookings": [
  
   
    ]
  
  },
  {

    "name": "khusboo",
  
    "dob": "14/06/1998",
  
    "gender": "female",
  
    "city": "Amrawati",
  
    "sports": [
  
      "swimming"
  
    ],
  
    "bookings": [
  
   
    ]
  
  },
  {

    "name": "shielesh pandit",
  
    "dob": "1/1/1996",
  
    "gender": "male",
  
    "city": "banaras",
  
    "sports": [
  
      "shooting"
  
    ],
  
    "bookings": [
  
   
    ]
  
  }
  
  
  ]


let name=req.body.name
players.push(name)

let dob=req.body.dob
players.push(dob)


let gender=req.body.gender
players.push(gender)

let city=req.body.city
players.push(city)

let sports=req.body.sports
players.push(sports)


let bookings=req.body.bookings
players.push(bookings)

for (let i =0; i < players.length; i++)  {
    if(players[i].name ==name){
        console.log("playerexist")
        res.send("player already exist")
    }else{
        players.push(name, dob, gender, city, sports, bookings)
    }
  }


  res.send( {msg: players, status:true} )
  });

  





module.exports =router;