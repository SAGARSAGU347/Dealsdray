import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function MainCreateEmp() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/getemployees")
            .then(response => setEmployees(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
        <Header/>
        
        <div className="container mt-5">
            <h1 className="text-center mb-4">Employee List</h1>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Action</th> {/* Added Action column */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>
                                {employee.image ? (
                                    <img 
                                        src={employee.image} 
                                        alt={employee.name} 
                                        className="img-thumbnail" 
                                        style={{ width: '50px', height: '50px' }} 
                                    />
                                ) : "No Image"}
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.course}</td>
                            <td>
                                {employee.createDate ? new Date(employee.createDate).toLocaleDateString() : 'N/A'}
                            </td>
                            <td>
                                
                                <a href="/editemployee" className="mr-2">Edit</a> / <a href={`#delete-${employee._id}`}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default MainCreateEmp;
