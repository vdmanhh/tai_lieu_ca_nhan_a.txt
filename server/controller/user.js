const User = require("../model/user")

exports.createUser = async (req,res)=>{
   
    const {email,picture}= req.user;
    const user = await User.findOneAndUpdate(
        {email},
        {name : email.split("@")[0],picture},
        {new : true}
    )
    if(user){
        res.json(user)
        // console.log("user is exist:",user);
    }
    else {
        const newUser =await new User(
          {  email,name:email.split("@")[0],picture}
        ).save();
        res.json(newUser)
        // console.log("register user success");
    }
}
exports.currentUser = async(req,res)=>{
   
    const {email} = req.user;
    const user = await User.findOne({email})
   
    res.json({user})
}
exports.forgetPass=async(req,res)=>{

    const {email} = req.body
    const user = await User.findOne({email})
    if(user){
        res.json({
            kq : "oke"
        })
    }
    else{
        res.json({
            kq : "lose"
        })
    }
}