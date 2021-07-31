const bcrypt = require('bcrypt');
const User = require("../model/schema");
const jwt = require('jsonwebtoken');

exports.homeRouters = (req, res)=>{
    console.log(req.body);
    res.json(req.body);
}

exports.viewServices = (req, res)=>{
    res.send("hi")
}

exports.login = async (req, res)=>{
    //get user data
    try {
        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill Username and Password"});
            return
        }

        let{email, password} = await req.body;

        if(!email || !password){
            res.status(406).send({err: "Not all fields have been entered"});
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(406).send({err: "No account with this email"})
        }

        //compare the password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(406).send({err: "invalid credientials"})
        }

        //create jwt token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.cookie("jwttoken", token, {expires: new Date(Date.now() + 25892000000), httpOnly: true});
        res.send({token})

    } catch (error) {
        res.status(500).send({ err: error.message || "Error while Login"})
    }           
    }   

exports.register = async(req, res)=>{
    try{

        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill registration form"});
            return
        }

        let{username, email, password, confirm_pass} = req.body;

        if(!username || !email || !password || !confirm_pass){
            res.status(406).send({err: "Not all fields have been filled"});
        }
        if(password.length < 8){
            res.status(406).send({err: "The Password should be 8 characters long"});
        }
        if(password !== confirm_pass){
            res.status(406).send({err: "Password must be same for validation"});
        }

        //hashing password
        const hash = await bcrypt.hashSync(password, 10)

        // using document structure
        const newUser = new User({
            username,
            email,
            password: hash
        })

        newUser
            .save(newUser)
            .then(register=>{
                res.send(register)
            })
            .catch(error=>{
                res.status(406).send({err: error.message||"Something went wrong while registration"})
            });

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}

exports.delete = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.user_id);
        res.send({msg: "User Deleted Successfully"});
    } catch (error) {
        res.status(500).send({err: error.message||"Error while deleting user"})
    }
}