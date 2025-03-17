import { useState } from "react";

const AddProducts = () => {
    let [product_name, setProductName] =useState("");
    let [product_desc, setProductDesc] =useState("");
    let [product_cost, setProductCost] =useState("");
    let [product_photo, SetProductPhoto] =useState("");
    let [loading, setLoading] =useState("");
    let [success, setSuccess] =useState("")
    let [error, setError] =useState("");
    

    return ( 
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
            <h2>Add products</h2>
            <form>
                <input type="text" className="form-control" placeholder="Enter Product name" required onChange={(e)=> setProductName(e.target.value)}/> <br />
                <textarea name="" id="" className="form-control" placeholder="Product Description" onChange={(e)=> setProductDesc(e.target.value)} required></textarea> <br />
                <input type="number" className="form-control" placeholder="Product Cost" required onChange={(e)=> setProductCost(e.target.value)} /> <br />
                <label htmlFor="" className="form-label">Product Photo</label> <br />
                <input type="file" className="form-control" onChange={(e)=> SetProductPhoto(e.target.files[0])} /> <br />
        <button className="btn btn-primary">Add Products</button>
            </form>
        </div>
      </div>
     );
}
 
export default AddProducts;