import React from "react";
import styled from "styled-components";
import AuthHeader from "./common/AuthHeader";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <AuthHeader />
      <Divid>
        <h1>SignUp Page</h1>
        <Form>
        <input type="name" placeholder="Full Name" name="name" /> <br />
          <input type="email" placeholder="Email" name="email" /> <br />
          <input type="password" placeholder="Password" name="password" /> <br />
          <input type="password" placeholder="Confirm Password" name="password" /> <br />
          <button type="submit">SIGN UP</button>
        </Form>
        <p>
          Already have an account{" "}
          <Link to="/">
            {" "}
            <span>Login</span>
          </Link>{" "}
        </p>
        <hr />
        <p>or Sign-In with</p>
        <GACT>
          <div><box-icon type='logo' color="white" name='google-plus'></box-icon> Sign in with google account</div>
        </GACT>
      </Divid>
      <Footer />
    </div>
  );
}

export default SignUp;
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