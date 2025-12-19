import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.text())
      .then((text) => setMessage(text))
      .catch(() => setMessage("Error calling backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

