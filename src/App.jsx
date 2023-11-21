import { useState } from "react";
import "./App.css";

console.log(import.meta.env.VITE_MY_API_KEY);

function App() {
  const [image, setImage] = useState("https://source.unsplash.com/M7ArH6K0Oyw");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    return "Yes";
  }

  return (
    <>
      <h1>Postman Student Community</h1>
      <h2>Image Generator</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <img
          style={{ width: 512, height: 512 }}
          src={image}
          alt="Generated Image"
        />
      </div>

      <div>
        <input
          placeholder="Please enter your prompt"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <button onClick={fetchData}>Generate Image</button>
    </>
  );
}

export default App;
