import { useState } from "react";
import validator from "validator";
import "./RegistrationForm.css";
import UsersRegistered from "../UsersRegistered/UsersRegistered";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // VALIDATION

    const validationErrors = {};

    if (!validator.isEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (password.length < 7) {
      validationErrors.password = "Password must be at least 7 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      id: Date.now(),
      fullName: fullName,
      email: email,
      password: password,
    };
    setRegisteredUsers([...registeredUsers, newUser]);
    console.log(newUser);

    setFullName("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleRemoveUser = (id) => {
    const remainingUsers = registeredUsers.filter((user) => user.id !== id);

    setRegisteredUsers(remainingUsers);
  };

  const handleRemoveAllUsers = () => {
    setRegisteredUsers([]);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* FullName */}
          <div className="form-field">
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={fullName}
              onChange={handleFullNameChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          {/* E-Mail */}
          <div className="form-field">
            <label htmlFor="email">E-Mail:</label>
            <input
              type="text"
              id="email"
              placeholder="john@mail.com"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <UsersRegistered
        registeredUsers={registeredUsers}
        handleRemoveUser={handleRemoveUser}
        handleRemoveAllUsers={handleRemoveAllUsers}
      />
    </div>
  );
};

export default RegistrationForm;
