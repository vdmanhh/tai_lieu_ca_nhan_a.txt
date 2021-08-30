const User = require('../model/user')
const admin = require('../firebase/Index');

exports.authCheck = async(req,res,next)=>{

    try {
        const fireBaseUser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken);
        
        req.user = fireBaseUser;
        next();
    } catch (error) {
        console.log("khong lay duoc token");
        res.status(401).json({
            error : "Invalid or expect token",
        })
    }
}

exports.adminCheck = async(req,res,next)=>{
    const {email}= req.body.user;
  
    const admin = await User.findOne({email}).exec();
 
    if(admin.role !== "admin"){
        res.status(403).json({
            checkadmin : "day ko phai la tai khoan admin"
        })
    }
    else {
        next();
    }
}