import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [btnloading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect to call myProfile when component mounts
  useEffect(() => {
    myProfile();
  }, []);

  // function for register user
  async function registerUser(name, email, password, navigate) {
    setBtnLoading(true);

    try {
      // get the data from route
      const { data } = await axios.post("/api/user/register", {
        name,
        email,
        password,
      });

      // if we get the data then show the sucess message
      toast.success(data.message);

      // after that set the states
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  // function for login of user
  async function loginUser(email, password, navigate) {
    setBtnLoading(true);

    try {
      // get the user from request
      const { data } = await axios.post("/api/user/login", {
        email,
        password,
      });

      // return the success message
      toast.success(data.message);
      // after that set the states
      setUser(data.user);
      setIsAuth(true);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  // fetch user profile
  async function myProfile() {
    try {
      const { data } = await axios.get("/api/user/me");
      setUser(data);
      setIsAuth(true);
      setLoading(false);
    } catch (error) {
      // Don't show error toast for initial load
      setIsAuth(false);
      setLoading(false);
    }
  }

  // function for logout user
  async function logoutUser() {
    try {
      const { data } = await axios.get("/api/user/logout");

      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuth(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        user,
        isAuth,
        loading,
        loginUser,
        logoutUser,
        isLoading: btnloading,
      }}
    >
        {children}
        <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
