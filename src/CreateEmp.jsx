// import React from 'react'
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createEmployee } from './api/employee.api';




import React from 'react'
import {useState} from "react"

import { useNavigate } from 'react-router-dom';
import { createEmployee } from './api/employee.api';

const CreateEmp = () => {
  
  
  const [empId, setEmpId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
const navigator = useNavigate();


  function saveEmployee(e){
    e.preventDefault();
    const employee = {empId,firstName,lastName,emailId};
    console.log(employee);

    createEmployee(employee).then((response) =>{
       console.log(response.data);
       navigator('/employees');
       
   })
 }

  return (
    <div>
     <div className="container">
        <div className="row">
          <div className="card">
            <h2 className="text-center">ADD NEW EMPLOYEE</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Emp Id</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    name="empId"
                    value={empId}
                    className="form-control"
                    onChange={(e)=>  setEmpId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={firstName}
                    className="form-control"
                    onChange={(e)=>  setFirstName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={lastName}
                    className="form-control"
                    onChange={(e) =>setLastName(e.target.value)  }
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Email Id</label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    name="empEmail_id"
                    value={emailId}
                    className="form-control"
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" onClick={saveEmployee}>Submit</button>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEmp