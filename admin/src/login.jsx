import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "./services/api";

import { AuthContext } from "./context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  async function handleLogin(e) {

  e.preventDefault();

  try {

    const res = await API.post(
      "/auth/login",
      {
        email: formData.email,
        password: formData.password
      }
    );

    

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        role: res.data.role
      })
    );

    if (login) {
      login(res.data);
    }

    if (res.data.role === "admin") {

      navigate("/admin");

    } else {

      navigate("/");

    }

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Login failed"
    );

  }

}

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleLogin}
      >

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required={true}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required={true}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;