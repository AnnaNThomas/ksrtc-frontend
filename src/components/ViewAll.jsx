import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
    const[data,changedata]=useState([])
const fetchData=()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos").then(
    (response)=>{
      changedata(response.data)
    }
  ).catch().finally()
}
useEffect(()=>{fetchData()},[])
  
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="text-bg-info p-3">VIEW ALL</div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">confirm password</th>
      <th scope="col">Gender</th>
      <th scope="col">phone No</th>
    </tr>
  </thead>
  <tbody>
 {data.map(
    (value,index)=>{return <tr>
        <td>{value.userId}</td>
        <td>{value.id}</td>
        <td>{value.title}</td>
        <td>{value.password}</td>
        <td>{value.completed}</td>
        <td>{value.phoneno}</td>
        
      </tr>}
 )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll