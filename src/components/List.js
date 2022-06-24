// import axios from 'axios';   
// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';
import { url } from '../helpers/url';
// import { useDispatch } from 'react-redux';
// import { logout } from '../actions/actionLogin';



const List = () => {
    
        // const navigate = useNavigate();
    
        // const dispatch = useDispatch();
        // const handleLogout = () => {
        //     dispatch(logout())
        //     navigate("/")
        // }

    const [registros, setRegistro] = useState([]);
    const getData = async() => {
        const res = await fetch(url);
        const json = await res.json();
        setRegistro(json.data);
    }
    useEffect(() => {
        getData();
    }, [])
    console.log(registros)
  return (
    <div>
    {/* <Button variant="danger" onClick={() => handleLogout()}>Logout</Button> */}

        <Table  className='container centrar'striped bordered hover>
  <thead>
    <tr>
      {/* <th>#</th> */}
      <th>Avatar</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {registros.map((item, index) => (
     
        <tr key={item.id}>
            <td> <img src={item.avatar}alt="imagen" width="100" height="100" /></td>
            <td> {item.first_name}</td>
            <td> {item.last_name}</td>
            
            <td>{item.email}</td>
    </tr>
        ))}                  

  </tbody>
</Table>
    </div>
  );



}

export default List