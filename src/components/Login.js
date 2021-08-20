import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('')

  const {push} = useHistory()

  const handleChanges = e => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {

      e.preventDefault();
      axios.post('http://localhost:5000/api/login', loginInfo)
      .then(res => {
          localStorage.setItem('token', res.data.payload);
          push('/protected');
      })
      .catch(err => {
          console.log(err)
      })
    if (loginInfo.username === "" || loginInfo.password === '' ) {
      setError('Username and Password field is required.')
    }else if (loginInfo.username !== "Lambda" || loginInfo.password !== 'i<3Lambd4' ) {
      setError('Incorrect Login.')
    }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
      </div>

      <form onSubmit={submitHandler}>
                <input data-testid="username" name="username" type="text" value={loginInfo.username} placeholder="Username" onChange={handleChanges}/> 
                <input data-testid="password" name="password" type="password" value={loginInfo.password} placeholder="Password" onChange={handleChanges}/> 
                <button>Login</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"