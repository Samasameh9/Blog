import { createContext, useContext, useState } from "react";
import { getBlogs } from "../../APIS/blog/getBlogs.js";



const AuthContext = createContext();

export function AuthProvider({ children }) {
   const [blog, setBlog] = useState([]);
  const [id, setId] = useState(localStorage.getItem("userId"));

  const login = (userId) => {
    localStorage.setItem("userId", userId);
    setId(userId);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    setId(null);
  };

  async function get_all_blogs() {
    try {
      const result = await getBlogs();
      console.log(result);
      
      if (result?.status == 200) {
        setBlog(result?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <AuthContext.Provider value={{ id, login, logout ,get_all_blogs,blog,setBlog}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}