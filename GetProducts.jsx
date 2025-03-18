import axios from "axios";
import { useState } from "react";

const GetProducts = () => {
    let [products, setProducts] =useState("")
    let [error, setError] =useState("")
    let [loading, setLoading] =useState("")

    const getProduct =async () =>{
        setError("");
        setLoading("Please Wait.....Receiving products")
        try {
            const response =await axios.get("https;//ndege25.pythonanywhere.com/api/getproducts")
            console.log(response)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }
    getProducts()
    return ( 
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            {/* navbar */}
            {/* carousel */}
            {/* content */}
            {/* footer */}
            <div className="col-md-3 justify-content-center mb-4">
                <div className="card shadow">
                    <img src="logo512.png" alt="" />
                    <div className="card-body">
                        <h5 className="mt-2">product Name</h5>
                        <p className="text-muted">Product Description</p>
                        <b className="text-warning">product Price</b>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default GetProducts;