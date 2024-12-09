import { useState } from "react";

export default function Logowanie() {
  const [haslo1, setHaslo1] = useState("");
  const [haslo2, setHaslo2] = useState("");
  const [login, setLogin] = useState("");

  const allEmpty = !(login && haslo1 && haslo2);

  function handleHaslo1Change(e: React.ChangeEvent<HTMLInputElement>) {
    setHaslo1(e.target.value);
  }
  function handleHaslo2Change(e: React.ChangeEvent<HTMLInputElement>) {
    setHaslo2(e.target.value);
  }
  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value);
  }

  function Login() {
    if (haslo1 === haslo2) {
      alert("Zalogowano poprawnie");
    } else {
      alert("Hasła nie są zgodne");
    }
  }

  return (
    <>
      <input
        type="text"
        value={login}
        onChange={handleLoginChange}
        placeholder="Nazwa użytkownika"
      />
      <div></div>
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
      <div></div>
      <button disabled={allEmpty} onClick={Login}>
        {" "}
        Logowanie{" "}
      </button>
    </>
  );
}
