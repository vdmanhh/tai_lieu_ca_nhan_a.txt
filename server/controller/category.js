const Category = require("../model/category")
const slugify = require("slugify")
exports.CreateCategory = async(req,res)=>{
    const {name} = req.body.user
    
    const category = new Category({name,slug:slugify(name)}).save()
    try {
        res.json({
            kq : "oke"
        })
    } catch (error) {
        console.log("ko tao dc category");
    }
}
exports.getAllCategory = async (req,res)=>{
    const getAllcate = await Category.find({}).exec();
    try {
        res.json(getAllcate)
    } catch (error) {
        console.log("ko lay dc allcatagpry");
    }
}
exports.deletee = async (req,res)=>{
    console.log("param:",req.params.slug);
    const {slug} =req.params;
    const cate = await Category.findOneAndDelete({slug}).exec();
    try {
        res.json({
            cate,
            kq : "oke"
        })
    } catch (error) {
        console.log("xoa ko thanh cong");
    }
}
exports.findOneCate = async (req,res)=>{
 
    const {slug} = req.body.user;
    const cate = await Category.findOne({slug}).exec();
    try {
        res.json(cate)
    } catch (error) {
        console.log("ko tim thay category");
    }



}
exports.updateCategory = async(req,res)=>{
    const {slug,name} = req.body.user;
    const category = await Category.findOneAndUpdate(
        {slug},
        {name,slug : slugify(name)},
        {new : true}
    ).exec();
    try {
        res.json({
            kq : "oke"
        })
    } catch (error) {
        console.log("cap nhat that bai !");
    }
}


exports.findOneCateforSub = async (req,res)=>{
    console.log("kq===",req.body.user);
    const _id = req.body.user.parent;
    const cate = await Category.findById({_id}).exec();
    
    try {
        console.log("cate=>",cate);
        res.json(cate)
    } catch (error) {
        console.log("ko tim thay category");
    }



}