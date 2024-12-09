import { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

interface DodawanieProps {
  addStudent: (student: Student) => void;
}

export default function Dodawanie({ addStudent }: DodawanieProps) {
  const [student, setStudent] = useState<Student>({
    imie: "",
    nazwisko: "",
    rocznik: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: name === "rocznik" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = () => {
    addStudent(student);
    setStudent({ imie: "", nazwisko: "", rocznik: 0 });
  };

  return (
    <>
      <input
        type="text"
        name="imie"
        placeholder="Imię"
        value={student.imie}
        onChange={handleChange}
      />
      <div></div>
      <input
        type="text"
        name="nazwisko"
        placeholder="Nazwisko"
        value={student.nazwisko}
        onChange={handleChange}
      />
      <div></div>
      <input
        type="text"
        name="rocznik"
        placeholder="Rocznik"
        value={student.rocznik === 0 ? "" : student.rocznik}
        onChange={handleChange}
      />
      <div></div>
      <button onClick={handleSubmit}>Dodaj</button>
    </>
  );
}
