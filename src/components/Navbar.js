import { useNavigate } from 'react-router-dom';
import '../assets/Navbar.css';

function Navbar(){

    const navigate = useNavigate()
    function handleLogout() {
        setTimeout(()=>{
            alert("Logout successfully");
            localStorage.clear();
            navigate("/Maindashboard");
        },1500)
  }


    return(
        <>
   <div className='nav-bar-home'>
  <nav className="navbar">
    <div className="nav-center">
      <ul className='nav-links'>
        <li><a href='/Home'>Home</a></li>
        <li><a href='/About' onClick={() => navigate("/About")}>About</a></li>
        <li><a href='/Updates' onClick={() => navigate("/Updates")}>Update</a></li>
      </ul>
    </div>
    <div className="nav-right">
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  </nav>
</div>

        </>
    );
}
export default Navbar;