import React from "react";

export default function Login() {
  return (
    <div>
      <form style={{ maxWidth: 500, margin: "auto" }}>
        <h2>Login Form</h2>
        <div className="input-container">
          <i className="fa fa-user icon" />
          <input className="input-field" type="text" placeholder="Username" name="usrnm" />
        </div>
        <div className="input-container">
          <i className="fa fa-key icon" />
          <input className="input-field" type="password" placeholder="Password" name="psw" />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
