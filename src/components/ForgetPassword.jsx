import React, {useState} from 'react';
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";

function ForgetPassword({history}) {
    const [formData, setFormData] = useState({
        email: '',
        textChange: 'Submit'
      });
      const { email, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (email) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
              email
            })
            .then(res => {
              
                setFormData({
                  ...formData,
                  email: '',
                });
                toast.success(`Please check your email`);
              
            })
            .catch(err => {
            console.log(err.response)
              toast.error(err.response.data.error);
            });
        } else {
          toast.error('Please fill all fields');
        }
    }
    return (
        <div>
            <ToastContainer/>
            <form
               
                onSubmit={handleSubmit}
              >
                <input
                  
                  type='email'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                <button
                  type='submit'
                  
                >
                  
               {textChange}
                </button>
              </form>
            
        </div>
    );
};

export default ForgetPassword;
