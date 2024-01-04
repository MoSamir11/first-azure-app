import React from "react";
import { useState } from "react";

const User = () => {
  var [data,setData] = useState([{
    "id": 1,
    "name": "Alice",
    "age": 25,
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "age": 30,
    "email": "bob@example.com"
  },
  {
    "id": 3,
    "name": "Charlie",
    "age": 28,
    "email": "charlie@example.com"
  },
  {
    "id": 4,
    "name": "David",
    "age": 22,
    "email": "david@example.com"
  }]);
  const [inputField,setInputField] = useState({
    uname:'',
    age:'',
    email:'',
  })
  const inputHandler = (e)=>{
    const {name,value} = e.target;
    setInputField((prevstate)=>({
        ...prevstate,
        [name]:value
    }))
  }
  const submit=()=>{
    console.log(`83--> ${inputField.uname}, ${inputField.age}, ${inputField.email}`);
    setData([...data,{id: data.length+1,name: inputField.uname, age: inputField.age, email: inputField.email}])
  }
  return (
    <>
      <div className="container mt-4">
        <button
          className="btn btn-success btn-sm float-right"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add <i className="fas fa-user"></i>
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="container p-4">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="email" className="float-left">Name:</label>
                  <input type="text" className="form-control" placeholder="Enter name" name="uname" value={inputField.uname} onChange={inputHandler} autoComplete="disable"/>
                </div>
                <div className="form-group">
                  <label htmlFor="age" className="float-left">Age:</label>
                  <input type="text" className="form-control" placeholder="Enter age" name="age" value={inputField.age} onChange={inputHandler} autoComplete="disable"/>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="float-left">Email:</label>
                  <input type="text" className="form-control" placeholder="Enter email" name="email" value={inputField.email} onChange={inputHandler} autoComplete="disable"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={submit} data-dismiss="modal">
                  Submit
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <table className="table table-success">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
