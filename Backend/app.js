const express=require('express');

const mongoose=require('mongoose');
const Employee=require('./models/employee');
const cors=require('cors');
const bodyParser = require('body-parser');

main()
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dealsdray');
    console.log("connected to db");

  }

  const app=express();
  app.use(cors())                                                             //cross origin resource sharing connecting frontend and backend
  app.use(express.json()); 
  app.use(bodyParser.urlencoded({ extended: true }));                                                   //for parsing json data from frontend



app.get("/",(req,res)=>{
    res.send("hi i am root")
});

//index route//
app.get("/getemployees", async(req,res)=>{
     Employee.find()
     .then(employees=>res.json(employees))
     .catch(err=>res.json(err))
       
       
    });
//show route//
    // app.get("/getemployees/:id", async(req,res)=>{
    //     let {id}=req.params;
    //     const employee= await Employee.findById(id);
    // });

    //create route
    // app.get("/employee/new",(req,res=>{

    // }))

    app.post('/createemp', async(req, res) => {
        const employeeData = {
          name: req.body.employee.name,
          email: req.body.employee.email,
          mobileNumber: req.body.mobileNumber,
          gender: req.body.gender,
          designation: req.body.designation,
          course: req.body.course,
          image: req.body.image
        };
      
        // You can now process the employeeData, store it in the database, etc.
        console.log(employeeData);
      
        // Send a response back to the client
        

        const newEmployee=new Employee(employeeData);
        await newEmployee.save();
        res.redirect('http://localhost:3001/dashboardemp');
        console.log(Employee);
      });
      










// app.get("/testEmp",async(req,res)=>{
//    let sampleEmp= new Employee({
//        name:"sagar",
//        email:"sagar@123",       
//        mobileNumber:1234567890,
//        designation:"developer", 
//        gender:"male",       
//        course:"java",       
                
//    });

//    await sampleEmp.save();
//    console.log(" sample was saved");
//    res.send("successfully saved")
// });





   

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})