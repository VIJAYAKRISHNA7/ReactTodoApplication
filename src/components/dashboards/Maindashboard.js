import { useState } from 'react';

import {useNavigate } from 'react-router-dom';

import '../../assets/Maindashboard.css';


function Maindashboard() {

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const [message, setMessage] = useState("");

  const[errMessage , seterrMessage] = useState("");


  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("https://691ea52abb52a1db22be8865.mockapi.io/users");
      const data = await response.json();  

      const userFound = data.find(
        (user) =>
          user.email === logEmail && user.password === logPassword
      );

    if(logEmail.trim() ===" "){
        seterrMessage("Email Cannot be empty.");
    }
    if(logPassword.trim() ===" "){
        seterrMessage("Password Cannot be empty.");
    }
      if (userFound) {
        setMessage("Login Successful!");
        setLogEmail("");
        setLogPassword("");

        localStorage.setItem("user", JSON.stringify(userFound));


        setLoading(true);
        setTimeout(() => {
            navigate("/home");
            setLoading(false);
        }, 1000);

      } else {
        setMessage("Invalid Credentials!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="main-dashboard">
        <div className="form-box">
          <h2>Get Started Here</h2>

          <input className="signup-email-btn" type="button" value="Signup With Email" onClick={() => navigate('/Form')}/><br />
          <input className="signup-google-btn" type="button" value="Signup With Google" />
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              value={logEmail}
              onChange={(e) => setLogEmail(e.target.value)}
            /><br />
            {errMessage && <p style={{color:"red"}}>{errMessage}</p>}

            <input
              type="password"
              placeholder="password"
              value={logPassword}
              onChange={(e) => setLogPassword(e.target.value)}
            />
            {errMessage && <p style={{color:"red"}}>{errMessage}</p>}

            <button className="signin-btn">Sign in</button>
            <p style={{ color: message === "Login Successful!" ? "green" : "red" }}>
              {message}
            </p>
            {loading && <p>loading....</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Maindashboard;
