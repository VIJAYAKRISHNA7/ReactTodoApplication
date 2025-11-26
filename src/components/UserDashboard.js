import UserData from './UsersData';
import '../assets/UserDashboard.css';

import { useState } from 'react';

function UserDashboard() {

 const [showUser, setShowUser] = useState(false);
 const [users, setUsers] = useState([]);

  const handleView = () => {

 
    fetch("https://691ea52abb52a1db22be8865.mockapi.io/users")
      .then(res => res.json())
      .then(data => setUsers(data));
      
    setShowUser(true);
  };

  return (
    <>
    
      <div className="User-list">
        <h2>Click to View Users List</h2>

        <button onClick={handleView}>View</button>

        {showUser && <UserData users={users} />}
      </div>
    </>
  );
}

export default UserDashboard;
