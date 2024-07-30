import { Button } from "@mui/material";
import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const SIGNIN = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        setEmail(result.user.email);
      }
    } catch (err) {
      console.log("ERROR");
    }
  };
  return (
    <div className="App">
      <Button onClick={SIGNIN}>GOOGLE LOGIN use this</Button>
      {email}
    </div>
  );
}

export default App;
