let min_length;
let max_length;
const capitals = document.getElementById("capitals");
const specials = document.getElementById("special");

document.getElementById("submit").addEventListener("click", generatePassword);

function generatePassword(event) {
  event.preventDefault();
  min_length = parseInt(document.getElementById("min_length").value);
  max_length = parseInt(document.getElementById("max_length").value);
  if (
    min_length > max_length ||
    min_length < 1 ||
    max_length < 1 ||
    document.getElementById("min_length").value.length == 0 ||
    document.getElementById("max_length").value.length == 0
  ) {
    window.alert("Podaj poprawne wartości!");
  } else {
    let password = generate(min_length, max_length, capitals, specials);
    window.alert("Twoje hasło to: " + password);
  }
}

function generate(min_length, max_length, capitals, specials) {
  let pass = "";
  if (capitals.checked) {
    if (specials.checked) {
      for (let i = 1; i <= getRandomIntInclusive(min_length, max_length); i++) {
        let siginint = getRandomIntInclusive(32, 126);
        pass += String.fromCharCode(siginint);
      }
    } else {
      for (let i = 1; i <= getRandomIntInclusive(min_length, max_length); i++) {
        let siginints = [
          getRandomIntInclusive(48, 57),
          getRandomIntInclusive(65, 90),
          getRandomIntInclusive(97, 122),
        ];
        let siginint = siginints[Math.floor(Math.random() * 3)];
        pass += String.fromCharCode(siginint);
      }
    }
  } else {
    if (specials.checked) {
      for (let i = 1; i <= getRandomIntInclusive(min_length, max_length); i++) {
        let siginints = [
          getRandomIntInclusive(32, 64),
          getRandomIntInclusive(91, 126),
        ];
        let siginint = siginints[Math.floor(Math.random() * 2)];
        pass += String.fromCharCode(siginint);
      }
    } else {
      for (let i = 1; i <= getRandomIntInclusive(min_length, max_length); i++) {
        let siginints = [
          getRandomIntInclusive(48, 57),
          getRandomIntInclusive(97, 122),
        ];
        let siginint = siginints[Math.floor(Math.random() * 2)];
        pass += String.fromCharCode(siginint);
      }
    }
  }
  return pass;
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
