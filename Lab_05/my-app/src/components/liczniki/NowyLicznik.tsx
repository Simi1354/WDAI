import { useState } from "react";
import Przycisk from "./Przycisk";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);

  const zwiekszLicznik = () => {
    setLicznik((prev) => prev + 1);
  };

  return (
    <>
      <div>{licznik}</div>
      <Przycisk setLicznik={zwiekszLicznik}></Przycisk>
    </>
  );
}
