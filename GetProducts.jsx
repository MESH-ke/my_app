import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// about props vs state

const GetProducts = () => {
    let [products, setProducts] =useState([])
    let [error, setError] =useState("")
    let [loading, setLoading] =useState("")

    const img_url ="https://ndege25.pythonanywhere.com/static/images/"
    const navigate =useNavigate ()

    const getProducts =async () =>{
        setError("");
        setLoading("Please Wait.....Receiving products")
        try {
            const response =await axios.get("https://ndege25.pythonanywhere.com/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError(error.message)

        }
    }
// useEffect(function, dependancy)

useEffect(()=>{
    getProducts();
}, [])
    return ( 
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            {/* navbar */}
            <nav className="m-4">
                <Link className="btn-btn dark mx-2" to ="/">Home</Link>
                <Link className="btn-btn dark mx-2" to ="/signin">Sign In</Link>
                <Link className="btn-btn dark mx-2" to ="/signup">Sign Up</Link>
                <Link className="btn-btn dark mx-2" to ="/addproducts">Add Products</Link>
            </nav>
            {/* carousel */}
            {/* content */}
            {/* footer */}

            {products.map((product)=>(
                  <div className="col-md-3 justify-content-center mb-4">
                  <div className="card shadow">
                      <img src={img_url + product.product_photo}className="product_img" alt="" />
                      <div className="card-body">
                          <h5 className="mt-2">{product.product_name}</h5>
                          <p className="text-muted">{product.product_desc.slice(0,10)}</p>
                          <b className="text-warning">{product.product_cost} Ksh</b>

                          <button className="btn btn-dark w-100"onClick={() =>navigate("/singleproduct", {state:{product}})} >View Product</button>
                      </div>
                  </div>
              </div>
            ))}
          
        </div>
     );
}
 
export default GetProducts;
