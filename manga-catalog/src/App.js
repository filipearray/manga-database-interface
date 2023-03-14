import React from "react";
import api from "./data/api";

const response = async () => { await api.get('/filmes') }

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
