import React from 'react'
import { Link } from "react-router-dom";

const Employee = ({employee}) => {

  return (
      <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.phone}</td>
        <td><Link to={`/edit/${employee.id}`} className="btn btn-default btn-sm">Edit</Link></td>
      </tr>
  )
}

export default Employee
