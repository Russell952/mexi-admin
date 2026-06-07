import {
  createContext,
  useEffect,
  useState
} from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });

  useEffect(() => {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

  }, [user]);

  // Login
  const login = (userData) => {

    setUser(userData);

    localStorage.setItem(
      "token",
      userData.token
    );

  };

  // Logout
  const logout = () => {

    setUser(null);

    localStorage.removeItem("token");

    localStorage.removeItem("user");

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export default AuthProvider;