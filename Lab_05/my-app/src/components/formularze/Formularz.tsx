import { useState } from "react";

export default function Formularz() {
  const [output, setOutput] = useState("");
  function setValue(e: React.ChangeEvent<HTMLInputElement>) {
    setOutput(e.target.value);
  }
  return (
    <>
      <input value={output} onChange={setValue}></input>
      <div style={{ minHeight: "25px" }}>{output}</div>
    </>
  );
}
