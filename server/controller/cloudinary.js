const cloudinary= require('cloudinary')


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key :process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})
exports.uploadd =async (req,res)=>{
    // console.log("req.body.user-image:",req.body.user);
    // console.log("req.body.user-image-headers:",req.headers);
    let result = await cloudinary.uploader.upload(req.body.user.image,{
        public_id:`${Date.now()}`,
        resource_type: "auto",
    })
    res.json({
        public_id :result.public_id,
        url: result.secure_url,
        // oke : "upload image thanh cong"
    })
}
exports.removed =async (req,res)=>{
    console.log("req.body.user-image:",req.body.user);
    let image_id = req.body.user.public_id;
    cloudinary.uploader.destroy(image_id,(err,result)=>{
        if(err) return res.json({ success: false, err });
        res.send("ok")
    })
}