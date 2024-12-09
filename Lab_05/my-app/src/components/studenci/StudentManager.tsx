import { useState } from "react";
import Dodawanie from "./Dodawanie";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

export default function StudentManager() {
  const [Students, setStudents] = useState<Student[]>([
    { imie: "Piotr", nazwisko: "Ćwik", rocznik: 2004 },
    { imie: "Adam", nazwisko: "Małysz", rocznik: 1977 },
    { imie: "Karol", nazwisko: "Zbigniew", rocznik: 2002 },
    { imie: "Monika", nazwisko: "Monika", rocznik: 2003 },
  ]);

  function add(student: Student) {
    setStudents([...Students, student]);
  }
  return (
    <>
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
      <Dodawanie addStudent={add}></Dodawanie>
    </>
  );
}
