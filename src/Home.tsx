import "./App.css";
import type { Element } from "./App";

interface HomeProps {
  elements: Element[];
}

function Home({ elements }: HomeProps) {
  return (
    <div className="container">
      <h1>Day Free</h1>

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
