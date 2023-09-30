import { useState } from "react";
import { Page } from "../../components";
import "./SignUp.style.scss";

function SignUp() {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const api = async () => {
    alert(emailValue);
    alert(passValue);
  }

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
        </div>
    </Page>
  );
}

export default SignUp;
