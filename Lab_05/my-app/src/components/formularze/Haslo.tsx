import { useState } from "react";

export default function Haslo() {
  const [haslo1, setHaslo1] = useState("");
  const [haslo2, setHaslo2] = useState("");
  const [message, setMessage] = useState("Proszę wprowadzić hasło");

  function handleHaslo1Change(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setHaslo1(value);

    if (value === haslo2 && value === "") {
      setMessage("Proszę wprowadzić hasło");
    } else if (value === haslo2) {
      setMessage("");
    } else {
      setMessage("Hasła nie są zgodne");
    }
  }

  function handleHaslo2Change(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setHaslo2(value);

    if (haslo1 === value && value === "") {
      setMessage("Proszę wprowadzić hasło");
    } else if (haslo1 === value) {
      setMessage("");
    } else {
      setMessage("Hasła nie są zgodne");
    }
  }
  return (
    <>
      <input
        type="text"
        value={haslo1}
        onChange={handleHaslo1Change}
        placeholder="Hasło"
      />
      <div></div>
      <input
        type="text"
        value={haslo2}
        onChange={handleHaslo2Change}
        placeholder="Powtórz hasło"
      />
      <div style={{ minHeight: "25px" }}>{message}</div>
    </>
  );
}
