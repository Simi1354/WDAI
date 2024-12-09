type ProduktProps = {
  name: string;
};

export default function Produkt({ name }: ProduktProps) {
  return <p>{name}</p>;
}
