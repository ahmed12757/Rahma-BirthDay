let counter = setInterval(function birthtime() {
  let times = new Date(" Dec 5 2024 00:00:00 ").getTime();
  let dateNow = new Date().getTime();
  let dateDiff = times - dateNow;
  if (dateDiff <= 0) {
    clearInterval(counter);
    document.querySelector(".zza").innerHTML = `🎂🎉كل سنه وانت طيبه يا عجلة`;
  } else {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minuts = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days < 10 ? `0 ${days}` : days;
    document.querySelector(".hours").innerHTML =
      hours < 10 ? `0 ${hours}` : hours;
    document.querySelector(".minuts").innerHTML =
      minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;
  }
}, 1000);
