import React from 'react'

const ViewAll = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
  <tr>
      <td scope="col">Anna</td>
      <td scope="col">anna@gmail.com</td>
      <td scope="col">anna123</td>
      <td scope="col">anna123</td>
      <td scope="col">female</td>
      <td scope="col">9087234123</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll