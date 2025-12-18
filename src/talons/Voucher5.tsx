import "../App.css";
import type { VoucherProps } from "../App";
import { useEffect } from "react";

function Voucher5({ element }: VoucherProps) {
  const voucherNum = element?.num;
  useEffect(() => {
    const deleteElement = async () => {
      if (!element) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/elements/${element._id}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();

        if (data.success) {
          console.log("✅ Element został usunięty:", element._id);
        } else {
          console.error("❌ Nie udało się usunąć elementu:", data.message);
        }
      } catch (error) {
        console.error("❌ Błąd przy usuwaniu elementu:", error);
      }
    };

    deleteElement();
  }, [element]);
  console.log(voucherNum);
  if (!element) {
    return (
      <div className="container">
        <div className="error">
          <span style={{ fontSize: 18 }}>
            Niestety, ten talon został już wykorzystany :c
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        height: "100vh",
      }}
    >
      <h1>Talon</h1>
      <h3>Gratulacje! ❤️</h3>
      <span>Możesz dzisiaj nic nie robić :*</span>
      <p style={{ fontSize: 10 }}>Element ID: {element._id}</p>
    </div>
  );
}

export default Voucher5;
