type PrzyciskProps = {
  setLicznik: () => void;
};

export default function Przycisk({ setLicznik }: PrzyciskProps) {
  return <button onClick={setLicznik}> Zwiększ licznik </button>;
}
