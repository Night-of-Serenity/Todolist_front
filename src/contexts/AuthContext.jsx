import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    axios
      .get("http://localhost:8080/auth/getMe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((rs) => {
        setUser(rs.data);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
