// import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { getme } from "../api/todoApi";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    // axios.get("http://localhost:8080/auth/getMe", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    getme().then((rs) => {
      setUser(rs.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log(!!user);
  // }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    // console.log(!!user);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>{props.children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
