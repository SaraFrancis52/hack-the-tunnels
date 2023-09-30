import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./SignUp.style.scss";

function SignUp() {
  const [message, setMessage] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  
  const { signedUp, signup } = useAccountContext();

  const navigate = useNavigate();

  const api = async () => {
    try {
      const message = await signup(emailValue, passValue);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (signedUp() === true) {
      navigate("/");
    }
  }, [signedUp, navigate]);

  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
          <label>Your email:</label>
          <br></br>
          <input id="email" type="email" name="email" onChange={e => setEmailValue(e.target.value)}></input>
          <br></br>
          <label>Your password:</label>
          <br></br>
          <input id="password" type="password" name="pass" onChange={e => setPassValue(e.target.value)}></input>
          <br></br>
          <button className="button" onClick={() => api()}>
            Sign Up
          </button>
          {message && <p>{message}</p>}
        </div>
    </Page>
  );
}

export default SignUp;
