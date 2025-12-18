import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

import Voucher1 from "./talons/Voucher1";
import Voucher2 from "./talons/Voucher2";
import Voucher3 from "./talons/Voucher3";
import Voucher4 from "./talons/Voucher4";
import Voucher5 from "./talons/Voucher5";

export interface Element {
  _id: string;
  title: string;
  num: number;
}
export interface VoucherProps {
  element: Element | null;
}

function App() {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/elements`
        );
        const data = await response.json();

        if (data.success) {
          setElements(data.data);
        } else {
          setError("Nie udało się pobrać danych");
        }
      } catch (err) {
        setError("Błąd połączenia z serwerem");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchElements();
  }, []);

  const getElementByNum = (num: number): Element | null => {
    return elements.find((el) => el.num === num) || null;
  };

  if (loading) {
    return <div className="container">Ładowanie...</div>;
  }

  if (error) {
    return <div className="container error">{error}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home elements={elements} />} />
        <Route path="/1" element={<Voucher1 element={getElementByNum(1)} />} />
        <Route path="/2" element={<Voucher2 element={getElementByNum(2)} />} />
        <Route path="/3" element={<Voucher3 element={getElementByNum(3)} />} />
        <Route path="/4" element={<Voucher4 element={getElementByNum(4)} />} />
        <Route path="/5" element={<Voucher5 element={getElementByNum(5)} />} />
      </Routes>
    </Router>
  );
}

export default App;
