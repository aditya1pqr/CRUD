const User = require('../models/user.model')
exports.home=( req , res )=>{
    res.send("hellow everyone")

}

exports.createUser = async (req , res)=>{
   try {
    const  {name , email} = req.body;
    if(!(name && email)){
        throw new Error("Name and Email is required")
    }
    const exixstinguser = await User.findOne({email})
    if(exixstinguser)
    {
        throw new Error("user is already exist")
    }
    const user =  await User.create({
      name ,
      email })

      res.status(201).json({
        succes:true,
        message:"user is created is sucessfu;ly",
        user,
      })
   } catch (error) {
    console.log(error)
    
   }

}

exports.getUser =async (req , res)=>{
    try {
        const users = await User.find();
        if(users == null)
        {
            throw new Error(" users are empty ")
        }
         res.status(201).json({
            succes:true,
            message: " all is present",
            users
         })
        
    } catch (error) {
        console.log(error)
    }

}

exports.updateUser = async(req, res)=>{
   try {
    // const {userId} =  req.params.id ;

    // const {name , email} = rq.body

    // const updated ={
    //     name ,
    //     email,
        
    // }
   

     const user = await User.findByIdAndUpdate(req.params.id , req.body)
   

     res.status(201).json({
        succes:true,
        message:"user updated is sucessfully",
        user,
     
     })
   } catch (error) {
    console.log(error)
    
   }


}


