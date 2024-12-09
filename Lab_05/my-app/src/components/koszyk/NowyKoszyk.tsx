import Produkt from "./Produkt";

export default function NowyKoszyk() {
  const Produkty = ["Gruszka", "Czekolada", "Szynka", "Chipsy", "Woda"];
  return (
    <>
      {Produkty.map((produkt, index) => (
        <Produkt key={index} name={produkt} />
      ))}
    </>
  );
}
