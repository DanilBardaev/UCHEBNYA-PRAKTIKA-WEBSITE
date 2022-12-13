function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
const text10sec = document.querySelector(".text10sec");
let item = 0;

let fun = setInterval(function () {
	item += 1;
	if (item === 11) {
	  document.getElementById("mp3").play();
	  item -= 10;
	}
	text10sec.innerHTML = item;
  }, 1000);