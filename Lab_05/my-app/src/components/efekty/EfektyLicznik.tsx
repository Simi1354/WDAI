import { useState, useEffect } from "react";

export default function EfektyLicznik() {
  const [licznik, setLicznik] = useState(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);
  return (
    <>
      <div>{licznik}</div>
      <button
        onClick={() => {
          setLicznik(licznik + 1);
          console.log("Licznik zwiększył się do " + (licznik + 1));
        }}
      >
        Zwiększ licznik
      </button>
    </>
  );
}
