import { useParams } from "react-router-dom";
import "./App.css";

function DayDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>
        Gratulacje ❤️
        <br />
        nic dzisiaj nie musisz robić
      </h1>
      <span>wykorzystałaś TALON nr. {id}</span>
    </div>
  );
}

export default DayDetails;
