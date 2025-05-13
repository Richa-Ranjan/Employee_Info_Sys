/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api/employee.api';

const ReadEmp = () => {
//variable initialization
  const [empData,setEmpData]=useState([]);



const navigator = useNavigate();
const {id}= useParams();

  const getData=async()=>{
    const empdata = await api.getemployeeAIP();
    //set data to empData
    setEmpData(empdata.data);
  };
  //page load call api
  useEffect(()=>{
    //call
    getData();
  },[])
console.log('data should be:',empData);
function updateEmployee(id){
  navigator(`/edit-employee/${id}`)
}

function deleteEmployee(id){
  if(id){
       api.deleteEmployee(id).then((response) =>{
                console.log(response.data);
                navigator('/employees');
                getData();
            });
       }
     }

  return (
    <div>

    <table>
	<thead>
	<tr class="table-headers">
  <th>Id</th>
    <th>Emp_Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email_Id</th>
    <th>Actions</th>
	</tr>
	</thead>
	<tbody>
    {empData.map((data)=>(
    <tr>
      <td>{data.id}</td>
      <td>{data.empId}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.emailId}</td>
      {/* <td><button className="btn btn-info" onClick="{() =>updateEmployee(data.id)}">Update</button>
      </td> */}
      <td><button className="btn btn-info" onClick={() => updateEmployee(data.id)}>Update</button>
      </td><button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteEmployee(data.id)} // Delete employee
                >
                  Delete
                </button>
    </tr>
    ))

    }
    
	</tbody>
   </table>
    </div>
  )
}

export default ReadEmp