import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    e.preventDefault()

    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h3>signup</h3>
      <label htmlFor="">Email:</label>
      <input 
        type="email" 
        onChange={e => setEmail(e.target.value)}
        value={email}
         />

        <label htmlFor="">Password:</label>
      <input 
        type="password" 
        onChange={e => setPassword(e.target.value)}
        value={password}
         />

         <button>Sign up</button>
    </form>
  );
};

export default Signup