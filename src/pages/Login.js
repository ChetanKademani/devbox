import { useState } from "react";
import style from "../themes/style";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={style.loginWrapper}>
      <div style={style.loginBox}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Devbox</h2>

        <div style={style.wrapper}>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              ...style.input,
              ...(isFocused ? style.inputFocus : {}),
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
