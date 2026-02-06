// Math 객체

console.log("최소값 : " + Math.min(5, 7, -2, -9)); //-9
console.log("최대값 : " + Math.max(5, 7, -2, -9)); // 7
console.log("절대값 :" + Math.abs(-7.57)); //7.57
console.log("반올림 :" + Math.round(2.897)); // 3
console.log("버림 :" + Math.floor(2.897)); // 2
console.log("올림 :" + Math.ceil(2.897)); // 3

console.log("0~1 랜덤값 : " + Math.random());

// 1~10 까지의 랜덤 숫자
// 0 <= Math.random() < 1
// 각각에 *10
// 0 <= Math.random()*10 < 10
// 각각에 +1
// 1 <= Math.random()*10 + 1 < 11

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 11) + 5);

//Date 객체

const now = new Date();
console.log(now);

console.log(
  `${now.getFullYear()}년 : ${now.getMonth() + 1}월 : ${now.getDate()}일`,
);

const date = new Date(2026, 8, 20, 18, 10, 0);
console.log(date);

// 보기 형식 지정

const date2 = new Date("2026-08-20T18:10:00");
console.log(date2.toLocaleDateString("ko-KR", { weekday: "long" }));

const date3 = new Date("2026-08-20T18:10:00");
console.log(date3.toLocaleDateString("en-CA"));

//string

const str = "Hello, JavaScript!";
console.log("길이 : " + str.length);
console.log("위치 : " + str.indexOf("Java"));
console.log("포함여부 : " + str.includes("Java"));
console.log("일부 : " + str.slice(7, 17));
console.log("대문자 : " + str.toUpperCase());

// Timer

setTimeout(() => {
  console.log("3초 후 실행!");
}, 3000); //1000이 1초 , 지연실행

let sec = 0;
setInterval(() => {
  console.log(`${++sec}초!`);
}, 1000); //계속 반복실행

// JSON

const obj = {
  name: "홍서윤",
  age: 22,
};

// 객체 => 문자열
const jsonStr = JSON.stringify(obj);
console.log(obj, typeof obj);
console.log(jsonStr, typeof jsonStr);

// 문자열 => 객체
const jsonParse = JSON.parse(jsonStr);
console.log(jsonParse);

// BOM
console.log(this);
console.log(location.href); // 전체 주소
console.log(location.pathname); //경로
console.log(location.host); // 호스트(도메인)

//페이지 이동
// location.href = "https://www.naver.com";
