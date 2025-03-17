import axios from "axios";
import { useState } from "react";
import{Link} from "react-router-dom"

const SignUp = ()  => {
    //create variables 
    let [Username, setUsername] = useState("")
    let [email, setEmail] =useState("")
    let [Phone, setPhone] =useState("")
    let [password, setpassword] =useState("")
    let [loading, setLoading] =useState ("")
    let [success, setSuccess] =useState("")
    let [error, setError] =useState("")
    const submitForm =async  (e) =>{
        e.preventDefault();
        try {
            setLoading("Please wait as we subbmit your Data")
            const data = new FormData();
            data.append("username", Username);
            data.append("email", email);
            data.append("phone", Phone);
            data.append("password", password);

            const response =await axios.post("https://ndege25.pythonanywhere.com/api/signup", data)
            setLoading("")
            setSuccess(response.data.success)
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
        }
    }
    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                <form onSubmit={submitForm}>
                <input type="text" className="form-control" placeholder="Enter Username" required onChange={(e)=> setUsername(e.target.value)}/> <br />
                <input type="email" className="form-control" placeholder="Enter Email" required onChange={(e)=> setEmail(e.target.value)}/> <br />
                <input type="tel" className="form-control" placeholder="Enter Phone No" required onChange={(e)=> setPhone(e.target.value)}/> <br />
                <input type="password" className="form-control" placeholder="Enter Password" required onChange={(e)=> setpassword(e.target.value)}/> <br />
                <button className="btn btn-primary">Sign Up</button>

                </form>
                <p>Already Have an Account ?<Link to ="/signin">Sign In</Link></p>
            </div>
        </div>
     );
}
 
export default SignUp;