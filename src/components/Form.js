import { useEffect, useState } from "react";
import Popup from './Popup';
import { useNavigate } from "react-router-dom";


function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  
  const [signupSuccess, setSignUpSuccess] = useState("");

  // const [pswlength , setpswlength] = useState("");
  const[users,setUsers] = useState([]);

  const [popOpen ,setOpenPop] = useState(false);

  const openPop = () => setOpenPop(true);
  const closePop = () => setOpenPop(false);

  const navigate = useNavigate();

  


useEffect(() => {
  fetch("https://691ea52abb52a1db22be8865.mockapi.io/users")
    .then(res => res.json())   
    .then(data => setUsers(data));
}, []);


  function handlechange(e) {
    const { name, value } = e.target;
    localStorage.setItem(name,value);

    if (name === "username") {
      setName(value);
      setNameError(""); 
    } else if (name === "email") {
      setEmail(value);
      setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

    if (name.trim() === "") {
      setNameError("Username cannot be empty");
      valid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
      valid = false;
    }

    if (!valid) return;
    console.log("values:",name,email,password);
    setSignUpSuccess("Successfully Signed up..");
    setOpenPop(<Popup />);
    valid = true;
    setTimeout(() => {
        setSignUpSuccess(""); 
        navigate("/Home");

    }, 1500);
    

    setName("");
    setEmail("");
    setPassword("");

    //fetching api to store user datas

fetch("https://691ea52abb52a1db22be8865.mockapi.io/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email,
    password: password
  })
})
  .then(res => res.json())   
  .then(data => {
    console.log("Created user:", data);
    setUsers([...users, data]);
  })
  .catch(err => console.log("Error:", err));
  }

  return (
    <div className="reg-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        
        <input
          id="input1"
          type="text"
          value={name}
          name="username"
          placeholder="name"
          onChange={handlechange}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        <br />

    
        <input
          id="input2"
          type="email"
          value={email}
          name="email"
          placeholder="email"
          onChange={handlechange}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <br />


        <input
          id="input3"
          type="password"
          value={password}
          name="password"
          placeholder="password"
          onChange={handlechange}
        />
        {passwordError && <p style={{ color:"red" }}>{passwordError}</p>}
        {/* {pswlength && <p style = {{ color:"red"}}>{pswlength}</p>} */}
        <br />

        <button type="submit" >submit</button>
        {signupSuccess && <p style={{color:"green"}}><b>{signupSuccess}</b></p>}
        
        {popOpen && <Popup onClose={closePop} />}
      
      </form>

    </div>
  );
}

export default Form;
