import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(emailValue, passValue);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <label>Your email:</label>
        <br></br>
        <input id="email" type="email" name="email" onChange={e => setEmailValue(e.target.value)}></input>
        <br></br>
        <label>Your password:</label>
        <br></br>
        <input id="password" type="password" name="pass" onChange={e => setPassValue(e.target.value)}></input>
        <br></br>
        <button onClick={() => attemptLogin()}>
          Login
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
