const mongoose=require('mongoose');
const initData=require('./data');
const Employee=require('../models/employee');

main()
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dealsdray');
    console.log("connected to db");

  }
  const initDB=async()=>{
    await Employee.deleteMany({});
    await Employee.insertMany(initData.data);
    console.log("data inserted");
  }
  initDB();