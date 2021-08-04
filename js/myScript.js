const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

const x = setInterval(function () {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownTimer").innerHTML = days + " : " + hours + " : "
    + mins + " : " + secs;

  if (distance < 0) {
    document.getElementById("countdownTimer").innerHTML = days + " : " + hours + " : "
      + mins + " : " + secs;
    /* clearInterval(x);
    document.getElementById("countdownTimer").innerHTML = "EXPIRED"; */
  }
}, 1000);

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}
