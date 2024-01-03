import React from "react";

const User = () => {
    var data =[
        {
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
        },
        {
          "id": 5,
          "name": "Eva",
          "age": 27,
          "email": "eva@example.com"
        },
        {
          "id": 6,
          "name": "Frank",
          "age": 35,
          "email": "frank@example.com"
        },
        {
          "id": 7,
          "name": "Grace",
          "age": 29,
          "email": "grace@example.com"
        },
        {
          "id": 8,
          "name": "Hannah",
          "age": 26,
          "email": "hannah@example.com"
        },
        {
          "id": 9,
          "name": "Ian",
          "age": 31,
          "email": "ian@example.com"
        },
        {
          "id": 10,
          "name": "Julia",
          "age": 24,
          "email": "julia@example.com"
        }
    ]
      
  return (
    <>
      <div className="container mt-4">
      <button className="btn btn-success btn-sm float-right">Add <i className="fas fa-user"></i></button>
      <br/>
      <br/>
      <table class="table table-success">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
         {
            data.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            ))
         }
        </tbody>
      </table>
      </div>
    </>
  );
};

export default User;
