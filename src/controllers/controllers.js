const testOne =async function(req,res){
    res.send({msg:"first middleware passed "})
}

const testTwo=async function(req,res){
res.send({msg:"   second  middleware  passed"})
}


module.exports.testOne= testOne
module.exports.testTwo= testTwo