import React from 'react'
import Header from './Header';

function EditEmp() {
    return (
      <>
      <Header/>
      
     
      <div class="container mt-5">
          <form id="myForm" method='post' action=' http://localhost:3000/getemployees/{employee._id}`;'>
              <div class="form-group row">
                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                      <input type="text" class="form-control" id="name"  name="employee[name]" required />
                  </div>
              </div>
  
              <div class="form-group row">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                      <input type="email" class="form-control" id="email"  name="employee[email]" required />
                  </div>
              </div>
  
              <div class="form-group row">
                  <label for="mobile" class="col-sm-2 col-form-label">Mobile No</label>
                  <div class="col-sm-10">
                      <input type="Number" class="form-control" id="mobile"  name="employee[mobileNumber]" required />
                  </div>
              </div>
              <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Gender</label>
                  <div class="col-sm-10">
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="gender" id="male" value="M" />
                          <label class="form-check-label" for="male">M</label>
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
                      <input type="text" class="form-control" id="name"  name="image" required />
                  </div>
              </div>
  
              <div class="form-group row">
                  <div class="col-sm-10 offset-sm-2">
                      <button type="submit" class="btn btn-primary">Update</button>
                  </div>
              </div>
          </form>
      </div>
      </>
    );
  }
  
  
  export default EditEmp