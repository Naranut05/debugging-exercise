import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");


  const isValid = username.trim().length >= 3;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    alert(`Submitted: ${username}`);
    setUsername("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
