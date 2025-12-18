import { useNavigate } from "react-router-dom";
import "./App.css";
import type { Element } from "./App";

interface HomeProps {
  elements: Element[];
}

function Home({ elements }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Day Free</h1>
      <div style={{ marginBottom: 10, display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/1")}>Link 1</button>
        <button onClick={() => navigate("/2")}>Link 2</button>
        <button onClick={() => navigate("/3")}>Link 3</button>
        <button onClick={() => navigate("/4")}>Link 4</button>
        <button onClick={() => navigate("/5")}>Link 5</button>
      </div>
      <div className="elements-list">
        {elements.map((element) => (
          <div
            key={element._id}
            className="element-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 className="element-title">{element.title}</h3>
            <span style={{ fontSize: 12 }} className="element-title">
              Num: {element.num} | ID: {element._id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
