import '../assets/UserData.css';

function UserData({ users }) {
  return (
    <>
      {users && users.length > 0 ? (
        <div style={{ marginBottom: "10px" }}>
          <table border="1">
            <caption>Registered Users</caption>
            <thead>
              <tr>
                <th><b>Name</b></th>
                <th><b>Email</b></th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={u.id || index}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users found</p>
      )}
    </>
  );
}

export default UserData;
