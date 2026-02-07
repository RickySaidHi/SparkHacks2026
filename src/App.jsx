import { useState } from "react";
import { auth } from "./firebase.jsx";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // LOGIN
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert(`Logged in as ${userCredential.user.email}`);
      } else {
        // SIGNUP
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`User created: ${userCredential.user.email}`);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", margin: "5px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px", marginTop: "10px" }}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: "10px", background: "transparent", border: "none", color: "blue", cursor: "pointer" }}
      >
        {isLogin ? "Create new account" : "Already have an account? Login"}
      </button>
    </div>
  );
}
``
