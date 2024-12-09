export default function Ternary() {
  let a = true;
  let b = false;

  return (
    <>
      {a ? (
        <div>
          Stwierdzenie <b>a</b> jest prawdziwe{" "}
        </div>
      ) : (
        <div>
          Stwierdzenie <b>a</b> jest fałszywe{" "}
        </div>
      )}
      {b ? (
        <div>
          Stwierdzenie <b>b</b> jest prawdziwe{" "}
        </div>
      ) : (
        <div>
          Stwierdzenie <b>b</b> jest fałszywe{" "}
        </div>
      )}
    </>
  );
}
