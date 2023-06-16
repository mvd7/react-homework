import "./UsersRegistered.css";

const UsersRegistered = (props) => {
  return (
    <div className="users-registered-container">
      <h2>Registered Users</h2>
      {props.registeredUsers.length > 0 ? (
        <ul className="user-list">
          {props.registeredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <span className="user-info">
                <strong>Name:</strong> {user.fullName}
              </span>
              <span className="user-info">
                <strong>Email:</strong> {user.email}
              </span>
              <button
                className="remove-button"
                onClick={() => props.handleRemoveUser(user.id)}
              >
                Remove User
              </button>
            </li>
          ))}
          <div className="remove-all-container">
            <button
              className="remove-button remove-all"
              onClick={() => props.handleRemoveAllUsers()}
            >
              Delete All Users
            </button>
          </div>
        </ul>
      ) : (
        <p className="no-users">No registered users</p>
      )}
    </div>
  );
};

export default UsersRegistered;
