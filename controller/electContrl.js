import electModel from "../models/electModel.js";

// create new user
export const newUser = async(req,res)=>{
    try{
        const user = await electModel.create(req.body);
        res.status(200).json({
                message: "Created a new User"
        })  
    }catch(e){
        console.log(e.message)
    }
};

// get all user
export const allUser = async(req,res)=>{
    try{
        const all = await electModel.findAll();
        res.status(200).json({
            message: "All users available are " + all.length,
            data: all
        })
    }catch(e){
        console.log(e.message)
    }
};

// get one user
export const oneUser = async(req,res)=>{
    try{
        let id = req.params.id;
        const one = await electModel.findAll({where:{id:id}});
        if(one.length === 0){
            res.status(404).json({
                message: `No user with the id: ${id} please`
            })
        }else{   
        res.status(200).json({
            message: `Heres the user with this id: ${id}`,
            data: one[0]
        })
        }
    }catch(e){
        console.log(e.message)
    }
};

