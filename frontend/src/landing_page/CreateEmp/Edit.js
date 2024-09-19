import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Edit = () => {


    const { id } = useParams();
    const[data,setData]=useState({});
    useEffect(() => {
        axios.get("http://localhost:3000/getemployees/"+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }, [id])
    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:3000/getemployees/"+id,data)
        .then(res=>console.log(res))
        

    }

  return (
    <>
    
    
   
    <div class="container mt-5">
        <form id="myForm" method='post' onSubmit={{handleSubmit}}>
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="Enter your name" name="employee[name]" value={data.name} required  onChange={e=>setData({...data,name:e.target.value})}/>
                </div>
            </div>

            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" name="employee[email]" required  value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
                </div>
            </div>

            <div class="form-group row">
                <label for="mobile" class="col-sm-2 col-form-label">Mobile No</label>
                <div class="col-sm-10">
                    <input type="Number" class="form-control" id="mobile" placeholder="Enter your mobile number" name="employee[mobileNumber]" required  onChange={e=>setData({...data,mobileNumber:e.target.value})}/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Gender</label >
                <div class="col-sm-10">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="M" />
                        <label class="form-check-label" for="male">M</label >
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="F" />
                        <label class="form-check-label" for="female">F</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="designation" id="hr" value="HR" />
                        <label class="form-check-label" for="hr">HR</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="designation" id="manager" value="Manager" />
                        <label class="form-check-label" for="manager">Manager</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="designation" id="sales" value="Sales" />
                        <label class="form-check-label" for="sales">Sales</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Course</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="mca" value="MCA" name="course" />
                        <label class="form-check-label" for="mca">MCA</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="bca" value="BCA" name="course" />
                        <label class="form-check-label" for="bca">BCA</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="bsc" value="BSC" name="course" />
                        <label class="form-check-label" for="bsc">BSC</label>
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Image</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="Url of the image" name="image" required />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-10 offset-sm-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Edit