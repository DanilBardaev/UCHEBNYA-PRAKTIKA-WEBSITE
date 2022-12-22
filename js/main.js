function show_hide_password(target) {
  var input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}
const text10sec = document.querySelector(".text10sec");
let time = 0;

let function1 = setInterval(function () {
time += 1;
  if (time === 11) {
    document.getElementById("mp3").play();
    time -= 10;
  }
  text10sec.innerHTML = time;
}, 1000);

// Форма для телефона
$(".phone").mask("+7(999)999-99-99");


