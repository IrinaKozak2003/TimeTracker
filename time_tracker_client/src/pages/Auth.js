import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { MAIN_ROUTER } from "../utils/consts";


const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const click = async () => {
    try {
      const isEmailValid = validator.isEmail(email);
      if (!isEmailValid) {
        alert('Please enter a valid email address.');
        return;
      }

      if (!isLogin) {
        if (password !== confirmPassword) {
          alert('Password and confirm password do not match.');
          return;
        }
        const response = await registration(email, password, confirmPassword, username);
        navigate(MAIN_ROUTER);
        window.location.reload();
      } else {
    
        const response = await login(email, password);
        navigate(MAIN_ROUTER);
        user.setUser(response);


        if (response['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
          user.setIsAdmin(true);
        }
        
        user.setIsAuth(true);
        
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">{isLogin ? 'Login' : 'Registration'}</h2>
              <p className="text-white-50 mb-5">{isLogin ? 'Please enter your login and password!' : 'Please enter your login, email, and password!'}</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' size="lg" onChange={handleEmailChange} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={handlePasswordChange} />
              {!isLogin ? <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='formControlLg' type='password' size="lg" onChange={handleConfirmPasswordChange} /> : null}
              {!isLogin ? <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg" onChange={handleUsernameChange} /> : null}
            

              <div style={{ marginTop: '-20px' }}>
                <MDBBtn
                  outline
                  className='mx-2 px-'
                  color='white'
                  size='lg'
                  disabled={!email || !password || (!isLogin && (!username || password !== confirmPassword))}
                  onClick={click}
                >
                  {isLogin ? 'Login' : 'Register'}
                </MDBBtn>
              </div>

              <div>
                {isLogin ? <p className="mb-0">Don't have an account? <a href="/registration" className="text-white-50 fw-bold">Register</a></p> : <p className="mb-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a></p>}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
});
export default Auth;
