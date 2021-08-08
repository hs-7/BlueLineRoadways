const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required: true,
        minlength: 8
    },
    password:{
        type:String
    }
})

const busSchema = new mongoose.Schema({
    busnumber:{
        type:String,
        unique:true,
        required:true
    },
    noOfSts:{
        type:Number,
        required: true
    },
    noOfsSlps:{
        type:Number,
        required: true
    },
    noOfdSlps:{
        type:Number,
        required: true
    },
    busFts:{
        type:String,
        required: true
    },
    busType:{
        type:String,
        required: true
    }
})

const stopSchema = new mongoose.Schema({
    stopname:{
        type:String,
        required: true
    },
    stopcity:{
        type:String,
        required: true
    },
    stopstate:{
        type:String,
        required: true
    },
    stoppincode:{
        type:Number,
        required: true
    }
})

const routeSchema = new mongoose.Schema({
    r_origin:{
        type:String,
        required: true
    },
    r_destination:{
        type:String,
        required: true
    }
})

const scheduleSchema = new mongoose.Schema({
    schedulebus:{
        type:String,
        required: true
    },
    scheduleroute:{
        type:String,
        required: true
    },
    schedulestop:[{
        stopid: {
            type:String,
            required: true
        },
        arrivaltime: {
            type:String,
            required: true
        },
        arrivalPrice: {
            type:Number,
            required: true
        }
      }]
})

const bookingSchema = new mongoose.Schema({
    UserId:{
        type:String,
        required: true
    },
    Despatcher:{
        type:String,
        required: true
    },
    Destination:{
        type:String,
        required: true
    },
    Seats_SleeperNo:{
        type:Array,
        required: true
    },
    PaymentType:{
        type:String,
        required: true
    },
    TotalAmount:{
        type:String,
        required: true
    },
    DateOfBooking:{
        type:String,
        required: true
    }
})

module.exports = User = mongoose.model('user', userSchema);
module.exports = Bus = mongoose.model('bus', busSchema);
module.exports = Stop = mongoose.model('stop', stopSchema);
module.exports = Route = mongoose.model('route', routeSchema);
module.exports = Schedule = mongoose.model('busschedule', scheduleSchema);
module.exports = Booking = mongoose.model('Booking', bookingSchema);