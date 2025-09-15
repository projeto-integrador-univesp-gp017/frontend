import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Verificando API...");

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL;
    fetch(`${base}/health`)
      .then(r => r.json())
      .then(d => setStatus(d.ok ? "API funcionando 🚀" : "API com problema"))
      .catch(() => setStatus("Não conectou na API"));
  }, []);

  return (
    <div style={{fontFamily:"sans-serif", textAlign:"center", marginTop:40}}>
      <h1>Frontend React - PI</h1>
      <p>Status do backend: {status}</p>
    </div>
  );
}

export default App;