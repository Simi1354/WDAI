import EfektyLicznik from "./components/efekty/EfektyLicznik";
import Odliczanie from "./components/efekty/Odliczanie";
import Tytul from "./components/efekty/Tytul";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Aktualizacja from "./components/inne/Aktualizacja";
import Ternary from "./components/inne/Ternary";
import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Komentarz from "./components/produkty/Komentarz";
import Komentarze from "./components/produkty/Komentarze";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";

function App() {
  return (
    <>
      <h1> Zadanie 1 </h1>
      <div>
        <h3> Zadanie 1.1 </h3>
        <Koszyk></Koszyk>
        <h3> Zadanie 1.2 </h3>
        <NowyKoszyk></NowyKoszyk>
      </div>
      <h1> Zadanie 2 </h1>
      <div>
        <h3> Zadanie 2.1 </h3>
        <Licznik></Licznik>
        <h3> Zadanie 2.2 </h3>
        <NowyLicznik></NowyLicznik>
      </div>
      <h1> Zadanie 3 </h1>
      <div>
        <h3> Zadanie 3.1 </h3>
        <Formularz></Formularz>
        <h3> Zadanie 3.2 </h3>
        <Haslo></Haslo>
        <h3> Zadanie 3.3 </h3>
        <Logowanie></Logowanie>
      </div>
      <h1> Zadanie 4 </h1>
      <div>
        <h3> Zadanie 4.1 </h3>
        <Ternary></Ternary>
        <h3> Zadanie 4.2 </h3>
        <Aktualizacja></Aktualizacja>
      </div>
      <h1> Zadanie 5 </h1>
      <div>
        <h3> Zadanie 5.1 </h3>
        <Studenci></Studenci>
        <h3> Zadanie 5.2 </h3>
        <StudentManager></StudentManager>
      </div>
      <h1> Zadanie 6 </h1>
      <div>
        <h3> Zadanie 6.1 </h3>
        <EfektyLicznik></EfektyLicznik>
        <h3> Zadanie 6.2 </h3>
        <Tytul></Tytul>
        <h3> Zadanie 6.3 </h3>
        <Odliczanie></Odliczanie>
      </div>
      <h1> Zadanie 7 </h1>
      <div>
        <h3> Zadanie 7.1 </h3>
        <Komentarz
          id={0}
          body={
            "Bongcloud - Trener mówi aby robić roszadę i wyprowadać lekkie figury? Bzdura! 1.e4 e5 2. Ke2!! to jest to co powinieneś grać"
          }
          postId={0}
          likes={5}
          user={{
            id: 0,
            username: "mydlowplynieskurwysynie",
            fullName: "Michał Pitera",
          }}
        ></Komentarz>
        <h3> Zadanie 7.2 </h3>
        <Komentarze></Komentarze>
      </div>
    </>
  );
}

export default App;
