const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//---createuseer------------------------------------------------------------------------------------------------------------------------------------------------------
const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {let data = req.body;
  let savedData = await userModel.create(data);
  
  res.status(201).send({ msg: savedData });
}catch (error){
  res.status.send(500).send(error.message)}}


//---------LoginByEmailAndPassword---------------------------------------------------------------------------------------------------------------------------------------

const loginUser = async function (req, res) {
  try{
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}
catch(error){

  res.status(500).send(error.message)}};


//--------GetUSersData-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);
  

  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });}
  catch(error){
    res.status(500).send(error.message)
  }};


//-------------UpdateUser-----------------------------------------------------------------------------------------------------------------------------------------------------------
const updateUser = async function (req, res) {
  try{  let newId = req.params.userId;
    let user = await userModel.findById(newId);
   
    if (!user) {
      return res.status( 400 ).send("No such user exists");                      /////////////////////
    }
  let userUpdatedNumber = req.body;
    let updatedUser = await userModel.findOneAndUpdate({_id:newId},userUpdatedNumber,{new:true});
    res.status( 202 ).send({ status: user, data: updatedUser });                         /////////////////////
  }catch(error){
    res.status(500).send(error.message)                   /////////////////////
  }};
  
//---------------PostMessage--------------------------------------------------------------------------------------------------------------------------------------------------


const postMessage = async function (req, res) {
  try{  let message = req.body.message
    
   let user = await userModel.findById(req.params.userId)
    if(!user) return res.status( 400 ).send({status: false, msg: 'No such user exists'})        ////////////////////
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true});
    return res.status( 201 ).send({status: true, data: updatedUser})                ////////////////////////////////
}catch(error){
  res.status(500).send(error.message)             //////////////////////
}}

////--------------------------delete-user----------------------------------------------------

const isdeletedUser = async function (req, res) {
  try{  
      let isDeletedId = req.params.userId;
    let isDeletedProperty = await userModel.findByIdAndUpdate({_id:isDeletedId},{$set: {isDeleted:true}},{new:true});
    res.status( 200 ).send({ status: true, data: isDeletedProperty });           ////////////////////////////
  }catch(error){
    req.status(500).send(error.message)    //////////////////////////////////
  }};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.isdeletedUser=isdeletedUser;

