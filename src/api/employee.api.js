import axios from 'axios';

export const getemployeeAIP=async()=>{
    const allempdata = await axios.get('http://localhost:9081/api/viwAllEmp')

    return allempdata;
}



const REST_API_POST_URL = "http://localhost:9081/api/storeemp";
export const createEmployee  = (employee) => axios.post(REST_API_POST_URL,employee);
// eslint-disable-next-line no-unused-vars
export const getEmployeeById = (id) => axios.get('http://localhost:9081/api/employees/'+id);
export const updateEmployee = (employee,id) => axios.put(`http://localhost:9081/api/update-employee/`+id,employee);
export const deleteEmployee = (id) => axios.delete('http://localhost:9081/api/del-employee/'+id);