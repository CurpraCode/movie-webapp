import React, {useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import jwt from "jsonwebtoken";
import {isAuth} from "./auth/auth";
import { Link, Redirect} from "react-router-dom";

function Activate({match}){
     const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {
    let token = match?.params.token;
    let { name } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name);
  }, [match?.params,formData]);
  const { name, token} = formData;

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://curpramovie-api.herokuapp.com/api/activation", {
        token 
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

        toast.success(res.data.message);
      })
      .catch(err => {
        
        toast.error(err.response.data.errors);
      });
  };
    return(
<div>
{isAuth()? <Redirect to="/" />: null}
<ToastContainer/>
<h1>Welcome {name}</h1>
<form onSubmit={handleSubmit} >
<button type="submit">
Activate Your Account
</button>
<Link to="/signup">
<p>Or Sign Up again</p>
</Link>

</form>
</div>
    )
}
export default Activate;