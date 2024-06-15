import React from 'react'
import Nav from './Nav'

const Register = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <img src="https://live.staticflickr.com/65535/48347499432_57a6a0a2ba_b.jpg" class="img-fluid" alt="..."/>
                <div class="text-bg-info p-3">REGISTER</div>
                <div className="row g-3">
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phoneno</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Gender</label>
                        <select name="" id="" class="form-control">
                            <option class="option">Female</option>
                            <option class="option">Male</option>
                        
                        </select>
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <buttton className="btn btn-info">Register</buttton>
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p><a href="/" class="link-info">Back to login</a></p>
                    </div>
                </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Register