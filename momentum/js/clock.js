const clock = document.querySelector("h2#clock");   // 붙여써야함

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 1초를 기다렸다 실행하니까 미리 한번 실행
setInterval(getClock, 1000);

// setInterval(function, millisecond)
//setInterval(sayHello, 5000);
// 기다려줌
//setTimeout(sayHello, 5000);

// 오늘 날짜 = new Date()

//const date = new Date();
// getday: sunday = 0

// text formatting
// => .padStart: 시작부분에 padding 추가 / .padEnd
// .padStart(길이, 추가문자): 길이를 만족하지 않으면 추가문자를 반복해서 추가

