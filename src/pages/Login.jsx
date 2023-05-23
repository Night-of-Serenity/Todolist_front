import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { login, getme } from "../api/todoApi";

export default function Login() {
  const { user, setUser } = useAuth();
  // console.log(user);

  const [input, setInput] = useState({ username: "", password: "" });

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    login(input)
      .then((rs) => {
        localStorage.setItem("token", rs.data.token);
        let token = localStorage.getItem("token");
        return getme(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Login Form</h2>
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

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
