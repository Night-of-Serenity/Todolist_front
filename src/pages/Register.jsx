import { useState } from "react";
import axios from "axios";
import { register } from "../api/todoApi";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    const { username, password, confirmPassword } = input;
    e.preventDefault();
    if (password !== confirmPassword) return alert("Password not match, recheck");
    console.log(input);
    // axios.post("http://localhost:8080/auth/register", {
    //     username: username,
    //     password: password,
    //   })
    register({ username, password })
      .then((rs) => {
        console.log(rs.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Register Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="text"
            placeholder="Username"
            name="username"
            onChange={hdlChangeInput}
            value={input.username}
          />
        </div>

        <div className="flex w-full mb-4">
          <i className="fa fa-key text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>
        <div className="flex w-full mb-4">
          <i className="fa fa-key text-white min-w-16 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:border-2"
            type="password"
            placeholder="Password"
            name="confirmPassword"
            onChange={hdlChangeInput}
            value={input.confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-outline w-full btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
