import { useState, useEffect } from "react";

export default function Tytul() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(document.title);
  useEffect(() => {
    setTitle(value);
    document.title = value;
  }, [value]);

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
}
