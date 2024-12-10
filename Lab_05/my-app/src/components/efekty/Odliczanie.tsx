import { useState, useEffect } from "react";

export default function Odliczanie() {
  const [licznik, setLicznik] = useState(15);
  const [przycisk, setPrzycisk] = useState("START");
  const [started, setStarted] = useState(false);

  const active = licznik > 0;

  useEffect(() => {
    setPrzycisk((prev) =>
      active ? (started ? "STOP" : "START") : "Odliczanie zakończone"
    );

    if (started && licznik > 0) {
      const timer = setInterval(() => {
        setLicznik((prev) => (prev - 0.1 >= 0 ? prev - 0.1 : 0));
      }, 100);

      return () => clearInterval(timer);
    }
  }, [started, licznik]);

  return (
    <>
      <div> {licznik.toFixed(1)} sek </div>
      <button
        onClick={() => {
          setStarted((prev) => !prev);
        }}
        disabled={!active}
      >
        {przycisk}
      </button>
    </>
  );
}
