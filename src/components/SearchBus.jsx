import React from 'react'
import Nav from './Nav'

const SearchBus = () => {
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
        <nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="text-bg-info p-3">SEARCH BUS</div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Bus Number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <buttton className="btn btn-info">Search</buttton>
                        
                    </div>
                   
                </div>


                </div>
            </div>
        </div>
    </div>
  )
}
}

export default SearchBus