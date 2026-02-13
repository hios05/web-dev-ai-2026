// HTML 구조가 완전히 로드된 뒤 실행
// defer 와 같은 기능을 수행하므로 현 코드에선 없애도 된다.
window.addEventListener("DOMContentLoaded", () => {});

// h1 가져오기
const h1 = document.querySelector("h1");
console.log(h1);

// 클릭 이벤트
const click = document.querySelector("#click");
click.addEventListener("click", () => {
  // 클릭 이벤트가 일어날 시 실행하고자 하는 코드 작성
  //alert("클릭 이벤트 발생!");
  click.classList.toggle("active");
});

const double = document.querySelector("#double");
double.addEventListener("dblclick", () => {
  //alert("더블 클릭 발생!");
  double.classList.toggle("active");
});

const right = document.querySelector("#right");
right.addEventListener("contextmenu", () => {
  //console.log(event);
  right.style.backgroundColor = "hotpink";
  //alert("우클릭 발생!");
  right.classList.toggle("active");
});

// 마우스가 버튼에 올라갔을 때
const hover = document.querySelector("#hover");
hover.addEventListener("mouseenter", () => {
  console.log("mouseenter!");
  hover.style.backgroundColor = "lightblue";
  hover.textContent = "Mouse Enter!";
});

// 마우스가 버튼에서 떨어졌을 때
hover.addEventListener("mouseleave", () => {
  console.log("mouseleave!");
  // 배경색상은 navy, 텍스트는 Mouse Leave! 변경
  hover.style.backgroundColor = "navy";
  hover.textContent = "Mouse Leave!";
});

// 폼 이벤트
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const inputResult = document.querySelector("#inputResult");
// 제출 버튼을 누를 시, 제출 이벤트 (e) 매개변수를 작동
form.addEventListener("submit", (e) => {
  // input 입력이 비어있을시만 방지, 입력했다면 제출
  if (input.value.trim() === "") e.preventDefault();
  else alert("제출 완료!");
});
input.addEventListener("input", () => {
  inputResult.textContent = input.value;
});

// select에 있는 option을 선택할 때마다 일어나는 이벤트 : change
// 해당하는 이벤트가 일어날 시 selectResult에 값이 나타나도록 => e.target.value
const select = document.querySelector("#select");
const selectResult = document.querySelector("#selectResult");
select.addEventListener("change", (e) => {
  selectResult.textContent = e.target.value;
});
// 3. 키보드 이벤트
const key = document.querySelector("#key");
const keyResult = document.querySelector("#keyResult");
// keydown - keypress - keyup
key.addEventListener("keydown", (e) => {
  // keyResult의 글자 내용을 방금 누른 키의 이름(e.key)으로 바꾸어서 출력하다
  // (예: 'a', 'Enter', 'ArrowUp' 등)
  keyResult.textContent = e.key;
});
const move = document.querySelector(".moveBox");
let y = 0;
let x = 0;
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    y -= 50;
  } else if (e.key === "ArrowDown") {
    y += 50;
  } else if (e.key === "ArrowLeft") {
    x -= 50;
  } else if (e.key === "ArrowRight") {
    x += 50;
  }

  // 변화된 값을 실제 박스의 CSS 스타일로 적용하기
  move.style.top = `${y}px`;
  move.style.left = `${x}px`;
});

const wheel = document.querySelector("#wheel");
document.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) wheel.textContent = "휠을 위로 올림!";
  else wheel.textContent = "휠을 아래로 내림!";
});
const scroll = document.querySelector("#scroll");
document.addEventListener("scroll", () => {
  //이쪽부터는, 스크롤 이벤트와 관련 없이 브라우저의 스크롤에 대한 정보를 읽는 변수들.

  //console.log(document.documentElement.scrollHeight); // 전체 높이
  //console.log(window.innerHeight); // 화면에 보이는 높이
  //console.log(window.scrollY); // 스크롤 위치
  // scrollY + innerHeight === scrollHeight
  const scrollHeight = document.documentElement.scrollHeight;
  const innerHeight = window.innerHeight;
  const scrollY = window.scrollY;
  //console.log(scrollHeight - innerHeight); // scrollY (가장 스크롤 아래에 있을 경우)
  const totalHeight = scrollHeight - innerHeight;
  //console.log((scrollY / totalHeight) * 100);
  const width = (scrollY / totalHeight) * 100;
  scroll.style.width = `${width}%`;
});

// 5. 이벤트 위임
// 이미지를 클릭할 때마다 해당 이미지 지우기
/*
const img = document.querySelectorAll(".container img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", (e) => {
    //img[i].style.display = "none";
    //e.target.style.display = "none";
    e.currentTarget.style.display = "none";
  });
}*/

const container = document.querySelector(".container");
const removeHandler = (e) => {
  console.log(e.target); // 내가 클릭한 것
  console.log(e.currentTarget); // 이벤트가 걸린 본인
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
};
container.addEventListener("click", removeHandler);
