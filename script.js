// Récupération des différents éléments
const passwordInput = document.querySelector("#password");
const indication = document.querySelector(".pw-strength");
const eye = document.querySelector(".fa-eye");
const eyeOff = document.querySelector(".fa-eye-slash");

// Fonction getPasswordStrength qui va permettre de mesurer la force d'un mot de passe.
// Cette fonction a pour paramètre le mot de passe saisi par l'internaute.
const getPasswordStrength = (password) => {
  let s = 0;
  if (password.length > 6) {
    s++;
  }
  if (password.length > 10) {
    s++;
  }
  if (/[A-Z]/.test(password)) {
    s++;
  }
  if (/[0-9]/.test(password)) {
    s++;
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    s++;
  }
  return s;
};

// Ecoute de l'événement "focus" sur l'input password
passwordInput.addEventListener("focus", () => {
  indication.style.display = "block";
});

// Ecoute de l'évènement "click" sur l'icone eye
eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeOff.style.display = "block";
  passwordInput.type = "text";
});

// Ecoute de l'évènement "click" sur l'icone eye off
eyeOff.addEventListener("click", () => {
  eyeOff.style.display = "none";
  eye.style.display = "block";
  passwordInput.type = "password";
});

// Ecoute de l'événement "keyup" sur l'input password
passwordInput.addEventListener("keyup", (e) => {
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(".pw-strength span");
  strength = Math.max(strength, 1);
  passwordStrengthSpans[1].style.width = strength * 20 + "%";
  if (strength < 2) {
    passwordStrengthSpans[0].textContent = "Faible";
    passwordStrengthSpans[0].style.color = "#111111";
    passwordStrengthSpans[1].style.background = "#d13636";
  } else if (strength >= 2 && strength <= 4) {
    passwordStrengthSpans[0].textContent = "Moyen";
    passwordStrengthSpans[0].style.color = "#111111";
    passwordStrengthSpans[1].style.background = "#e6da44";
  } else {
    passwordStrengthSpans[0].textContent = "Fort";
    passwordStrengthSpans[0].style.color = "#ffffff";
    passwordStrengthSpans[1].style.background = "#20a820";
  }
});
