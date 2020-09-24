import React from 'react'
import Employee from './Employee'
import { getAllEmployees } from './employees'
import { Link } from "react-router-dom";

const EmployeeList = () => {

  const employees = getAllEmployees();

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 class="text-primary">Employees</h1>
            <Link to="/add" className="btn btn-primary">Add</Link>
            <table className="table">
              <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {employees.map(employee =>
                  <Employee key={employee.id} employee={employee}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )

}

export default EmployeeList
