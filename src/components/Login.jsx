import React, {useState} from "react";
import styled from "styled-components";
import AuthHeader from "./common/AuthHeader";
import Footer from "./common/Footer";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from './auth/auth';
// import { GoogleLogin } from 'react-google-login';

function Login({history}) {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    textChange: 'Sign In'
  });
  const { email, password1, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
      const handleSubmit = e => {
        console.log(process.env.REACT_APP_API_URL);
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                isAuth() && isAuth().role === 'admin'
                  ? history.push('/home')
                  : history.push('/home');
                toast.success(`Hey ${res.data.user.name}, Welcome back!`);
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err.response);
              toast.error(err.response.data.errors);
            });
        } else {
          toast.error('Please fill all fields');
        }
  };
  return (
    <div>
      <AuthHeader />
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer />
      <Divid>
        <h1>Login Page</h1>
        <Form  onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" onChange={handleChange("email")} /> <br />
          <input type="password" placeholder="Password" name="password" onChange={handleChange("password1")} /> <br />
          <button type="submit">LOGIN</button>
        </Form>
        <p>
          Don't av an account{" "}
          <Link to="/signup">
            {" "}
            <span>Sign Up</span>
          </Link>{" "}
        </p>
        <hr />
        <p>or Sign-In with</p>
        <GACT>
        <div>           
            <box-icon type='logo' color="white" name='google-plus'></box-icon> 
            
    Sign in with google account
            </div>
        </GACT>
      </Divid>
      <Footer />
    </div>
  );
};

export default Login;

const Divid = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: rgb(43, 43, 43);
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  span{
    color:rgba(52, 134, 235, 0.872);
  }
  h1 {
    text-align: center;
  }
  p{
    text-align:center;
  }
`;
const Form = styled.form`
  text-align: center;
 
  input {
    width: 80%;
    margin-bottom: 1rem;
    padding: 0.7rem;
    border: 0px;
    border-radius: 0.4rem;
    background-color: rgb(74, 68, 68);
    color: white;
  }
  input::placeholder{
color:white;
opacity:0.8;
  }
  input:focus {
    outline: none;
  }
  button {
    padding: 0.7rem;
    background-color: rgba(30, 127, 253, 0.831);
    border: 0px;
    border-radius: 0.4rem;
    width: 30%;
    color: white;
  }
  button:focus {
    outline: none;
  }
`;

const GACT=styled.div`
div{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(74, 68, 68);
    border-radius: 0.4rem;
    padding: 0.6rem;
    width: 80%;
    text-align:center;
    margin-left:2.5rem;
    margin-bottom:1rem;
  }
  box-icon{
    margin-right:0.5rem;
  }
`