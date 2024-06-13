import React from 'react'
import Nav from './Nav'

const Login = () => {
    const Search = () => {
    const [data, setData] = useState({
        "employeeid": "",
    });
    const [result, setResult] = useState([]);
    
   
    const deleteEmployee = (id) => {
        let input={ _id: id }
        axios.post("http://localhost:8083/delete",input)
            .then(response => {
                if (response.data.status === "success") {
                    alert("Successfully deleted");
                    // Update result after deletion
                } else {
                    alert("Error in deletion");
                }
            })
            .catch(error => {
                console.error("Delete error:", error);
                alert("Error occurred during deletion");
            });
    };

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        axios.post("http://localhost:8083/search", data)
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.error("Search error:", error);
                alert("Error occurred during search");
            });
    };
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="text-bg-info p-3">LOGIN</div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <buttton className="btn btn-info">Login</buttton>
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <p><a href="/Register" class="link-info">Goto register</a></p>
                    </div>
                </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Login