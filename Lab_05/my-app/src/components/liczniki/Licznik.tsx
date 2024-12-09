import { useState } from "react";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);
  return (
    <>
      <div>{licznik}</div>
      <button onClick={() => setLicznik(licznik + 1)}>Zwiększ licznik</button>
    </>
  );
}
