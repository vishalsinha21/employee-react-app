import React, { useEffect, useState } from 'react'
import { deleteEmployee, editEmployee, getEmployeeById } from "./employees";
import { useParams } from "react-router";

const EditEmployee = (props) => {

  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const employee = getEmployeeById(id)
    setFirstName(employee.firstName)
    setLastName(employee.lastName)
    setPhone(employee.phone)
  }, [id])


  const onSubmit = (e) => {
    e.preventDefault()
    editEmployee(id, firstName, lastName, phone)
    props.history.push('/')
  }

  const deleteEmp = (e) => {
    e.preventDefault()
    deleteEmployee(id)
    props.history.push('/')
  }

  return (
      <div className="container" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Edit Employee</h1>

            <form className="add-employee-form">
              <div className="form-group">
                <label>First Name</label>
                <input className="form-control"
                       id="firstName"
                       type="text"
                       required={true}
                       value={firstName}
                       onChange={e => setFirstName(e.target.value)}
                       placeholder="First Name"/>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                    className="form-control"
                    id="lastName"
                    type="text"
                    required={true}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last Name"/>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input className="form-control"
                       id="phone"
                       type="text"
                       value={phone}
                       onChange={e => setPhone(e.target.value)}
                       placeholder="Phone"/>
              </div>

              <button type="submit" className="btn btn-primary">Edit</button>
              &nbsp;
              <button className="btn btn-danger" onClick={deleteEmp}>Delete</button>

            </form>
          </div>
        </div>
      </div>
  );
}

export default EditEmployee

