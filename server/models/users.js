const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true,
            min : 2,
            max : 50,
        },
        lastName : {
            type : String,
            required : true,
            min : 2,
            max : 50,
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            min : 4
        },
        picturePath : {
            type : String,
            default : ""
        },
        friends : {
            type : Array,
            default : []
        },
        location : String,
        occupation : String,
        viewedProfile : Number,
        impression : Number
    },{timestamps:true}
)

const User = mongoose.model("mernUser",UserSchema)
export default User