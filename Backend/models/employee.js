const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const employeeSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobileNumber:{type:String},
    designation:{type:String,required:true},
    gender:{type:String,required:true},
    course: {type:String,required:true},
    image:{type:String,
        default:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>
            v===""
            ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v,
        },
        createDate:{type:Date,default:Date.now,required:true},
        
});

const Employee = mongoose.model('Employee',employeeSchema);

module.exports=Employee;
