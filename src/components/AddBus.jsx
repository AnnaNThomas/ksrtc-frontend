import React from 'react'
import Nav from './Nav'

const AddBus = () => {
    const [data, setData] = useState({
        name: '',
        route: '',
        busno: '',
        driverno: ''
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }


    const handleSubmit = () => {
        console.log(data);
        axios.post('http://localhost:8083/add', data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    alert('Successfully Added');
                } else {
                    alert('Failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form');
            });
    };

    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="text-bg-info p-3">ADD BUS</div>
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Route</label>
                                <input type="text" className="form-control" name="route" value={data.route} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Number</label>
                                <input type="text" className="form-control" name="busno" value={data.busno} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Driver Number</label>
                                <input type="text" className="form-control" name="driverno" value={data.driverno} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBus