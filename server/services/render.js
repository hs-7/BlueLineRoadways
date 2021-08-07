const bcrypt = require('bcrypt');
const schemas = require("../model/schema");
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

            User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap);  
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

exports.register_bus = async(req, res)=>{
    try{

        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill registration form"});
            return
        }

        let{busnumber,
            noOfSts,
            noOfsSlps,
            noOfdSlps,
            busFts,
            busType} = req.body;

        if(!busnumber || !noOfSts || !noOfsSlps || !noOfdSlps || !busFts || !busType){
            res.status(406).send({err: "Not all fields have been filled"});
        }
        // using document structure
        const newBus = new Bus({busnumber,
            noOfSts,
            noOfsSlps,
            noOfdSlps,
            busFts,
            busType
        })

        newBus
            .save(newBus)
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

exports.register_stop = async(req, res)=>{
    try{

        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill registration form"});
            return
        }

        let{stopname,
            stopcity,
            stopstate,
            stoppincode} = req.body;

        if(!stopname || !stopcity || !stopstate || !stoppincode){
            res.status(406).send({err: "Not all fields have been filled"});
        }
        // using document structure
        const newStop = new Stop({stopname,
            stopcity,
            stopstate,
            stoppincode})

        newStop
            .save(newStop)
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

exports.register_route = async(req, res)=>{
    try{

        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill registration form"});
            return
        }

        let{r_origin,
            r_destination} = req.body;

        if(!r_origin || !r_destination){
            res.status(406).send({err: "Not all fields have been filled"});
        }
        // using document structure
        const newRoute = new Route({r_origin,
            r_destination})

        newRoute
            .save(newRoute)
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

exports.register_schedule = async(req, res)=>{
    try{

        //validate request
        if(!req.body){
            res.status(406).send({err: "You have to fill registration form"});
            return
        }

        let{
            schedulebus,
            scheduleroute,
            schedulestop
        } = req.body;

        if(!schedulebus || !scheduleroute ||!schedulestop){
            res.status(406).send({err: "Not all fields have been filled"});
        }
        // using document structure
        const newSchedule = new Schedule({schedulebus,
            scheduleroute,
            schedulestop
        })

        newSchedule
            .save(newSchedule)
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

exports.busdata = async(req, res)=>{
    try{

        Bus.find({}, function(err, buses) {
            res.send({buses: buses});
         });

       

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}

exports.stopdata = async(req, res)=>{
    try{

        Stop.find({}, function(err, stops) {
            res.send({stops: stops});
         });

       

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}

exports.routedata = async(req, res)=>{
    try{

        Route.find({}, function(err, routes) {
            res.send({routes: routes});
         });

       

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}

exports.scheduledata = async(req, res)=>{
    try{

        Schedule.find({}, function(err, schedules) {
            res.send({schedules: schedules});
         });

       

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}

exports.findschedules = async(req, res)=>{
    try{

        if(!req.body){
            res.status(406).send({err: "You have to fill Despature and Destination"});
            return
        }

        let{origin, destination, date} = await req.body;

        console.log(origin)
        console.log(destination)
        console.log(date)

        if(!origin || !destination ||!date){
            res.status(406).send({err: "Not all fields have been entered"});
        }

        const stopOlist  = await Stop.find({$or:[{"stopname":origin},{"stopcity":origin}]});
        const stopDlist  = await Stop.find({$or:[{"stopname":destination},{"stopcity":destination}]});
        if(stopOlist.length==0){res.status(300).send({err: "no bus available"})}
        if(stopDlist.length==0){res.status(300).send({err: "no bus available"})}
        

        const depschedulestops = await Schedule.find({"schedulestop":{"$elemMatch":{"stopid": stopOlist[0]._id}}});
        const desschedulestops = await Schedule.find({"schedulestop":{"$elemMatch":{"stopid": stopDlist[0]._id}}});


        if(!depschedulestops||depschedulestops.length === 0 || !desschedulestops||desschedulestops.length === 0){
            return res.status(306).send({err: "No schedule available"})
        }

        const schList = [];

            {Array.from(depschedulestops).map((depObjectMapped, index) => {
                {Array.from(desschedulestops).map((desObjectMapped, index2) => {
                    if(depschedulestops.scheduleroute===desschedulestops.scheduleroute){
                        schList.push({"dep": depObjectMapped, "des": desObjectMapped})
                    }
                })}  
            })} 
        
            const schList2 = [];
            const adp = await Stop.find({ '_id' :  stopOlist[0]._id})
            const ads = await Stop.find({ '_id' :  stopDlist[0]._id})

            const bus = {};
            await Bus.find({}).then((v)=>{
                {Array.from(v).map((anObjectMapped, index) => {
                  bus[anObjectMapped.busnumber] =  anObjectMapped.busnumber +" | "+ anObjectMapped.busType  +" | "+ anObjectMapped.busFts ;
                })}
            })            

            {Array.from(schList).map((anObjectMapped, index) => {
                
                schList2.push({"dep_time": ((parseInt((anObjectMapped.dep.schedulestop[0].arrivaltime).split(":")[0])%12==0)? "12" : (parseInt((anObjectMapped.dep.schedulestop[0].arrivaltime).split(":")[0])%12)) +":"+(anObjectMapped.dep.schedulestop[0].arrivaltime).split(":")[1] +" "+ ((parseInt((anObjectMapped.dep.schedulestop[0].arrivaltime).split(":")[0]) < 12 || parseInt((anObjectMapped.dep.schedulestop[0].arrivaltime).split(":")[0]) === 24) ? "AM" : "PM"),
                "depdes_obid": anObjectMapped.dep._id + "," + anObjectMapped.des._id,
                "dep_place": adp[0].stopname +", "+adp[0].stopcity,
                "des_time": ((parseInt((anObjectMapped.des.schedulestop[0].arrivaltime).split(":")[0])%12==0)? "12" : (parseInt((anObjectMapped.des.schedulestop[0].arrivaltime).split(":")[0])%12)) +":"+(anObjectMapped.des.schedulestop[0].arrivaltime).split(":")[1] +" "+ ((parseInt((anObjectMapped.des.schedulestop[0].arrivaltime).split(":")[0]) < 12 || parseInt((anObjectMapped.des.schedulestop[0].arrivaltime).split(":")[0]) === 24) ? "AM" : "PM"),
                "des_place": ads[0].stopname +", "+ads[0].stopcity,
                "total_time": Math.abs(parseInt(anObjectMapped.des.schedulestop[0].arrivaltime)-parseInt(anObjectMapped.dep.schedulestop[0].arrivaltime)) +":"+ Math.abs(parseInt(anObjectMapped.des.schedulestop[0].arrivaltime.split(":")[1])-parseInt(anObjectMapped.dep.schedulestop[0].arrivaltime.split(":")[1])) + "hr",
                "bus_details": bus[anObjectMapped.dep.schedulebus],
                "sch_date": date.split("-")[1] +"/"+ date.split("-")[2],
                "price": Math.abs((anObjectMapped.des.schedulestop[0].arrivalPrice)-(anObjectMapped.dep.schedulestop[0].arrivalPrice))
                })
            })}



        res.send(schList2);
       

    }catch(error){
        res.status(500).send({ err: error.message || "Error while Registration"})
    }
}
