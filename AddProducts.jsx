import axios from "axios";
import { useState, Link} from "react";

const AddProducts = () => {
    let [product_name, setProductName] =useState("");
    let [product_desc, setProductDesc] =useState("");
    let [product_cost, setProductCost] =useState("");
    let [product_photo, SetProductPhoto] =useState("");
    let [loading, setLoading] =useState("");
    let [success, setSuccess] =useState("")
    let [error, setError] =useState("");
    
    const submitForm =async (e) =>{
        e.preventDefault();
        try {
            setError("")
            setSuccess("")
            setLoading("Please wait as we submit your data")
            
            const data=new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response =await axios.post("https://Mesh1.pythonanywhere.com/api/addproducts", data)
            setLoading("")
            setSuccess(response.data.success)
            setProductName("")
            setProductDesc("")
            setProductCost("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return ( 
    <div className="container-fluid">
                <nav className="m-4">
                <Link className="btn-btn dark mx-2" to ="/">Home</Link>
                <Link className="btn-btn dark mx-2" to ="/signin">Sign In</Link>
                <Link className="btn-btn dark mx-2" to ="/signup">Sign Up</Link>
                <Link className="btn-btn dark mx-2" to ="/addproducts">Add Products</Link>
            </nav>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
            <h2>Add products</h2>
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <b className="text-success">{success}</b>
            <form onSubmit={submitForm}>
                <input type="text" className="form-control" placeholder="Enter Product name" required value={product_name} onChange={(e)=> setProductName(e.target.value)}/> <br />
                <textarea name="" id="" className="form-control" placeholder="Product Description" value={product_desc} onChange={(e)=> setProductDesc(e.target.value)} required></textarea> <br />
                <input type="number" className="form-control" placeholder="Product Cost" required value={product_cost} onChange={(e)=> setProductCost(e.target.value)} /> <br />
                <label htmlFor="" className="form-label">Product Photo</label> <br />
                <input type="file" className="form-control" onChange={(e)=> SetProductPhoto(e.target.files[0])} /> <br />
                <button className="btn btn-primary">Add Products</button>
            </form>
        </div>
    </div>
      </div>
     );
}
 
export default AddProducts;
