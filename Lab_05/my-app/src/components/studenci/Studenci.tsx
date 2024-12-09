interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

export default function Studenci() {
  const Students: Student[] = [
    { imie: "Piotr", nazwisko: "Ćwik", rocznik: 2004 },
    { imie: "Adam", nazwisko: "Małysz", rocznik: 1977 },
    { imie: "Karol", nazwisko: "Zbigniew", rocznik: 2002 },
    { imie: "Monika", nazwisko: "Monika", rocznik: 2003 },
  ];

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <td style={{ border: "2px solid black" }}>Imię</td>
          <td style={{ border: "2px solid black" }}>Nazwisko</td>
          <td style={{ border: "2px solid black" }}>Rocznik</td>
        </tr>
      </thead>
      <tbody>
        {Students.map((student, index) => (
          <tr key={index}>
            <td style={{ border: "2px solid black" }}>{student.imie}</td>
            <td style={{ border: "2px solid black" }}>{student.nazwisko}</td>
            <td style={{ border: "2px solid black" }}>{student.rocznik}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
