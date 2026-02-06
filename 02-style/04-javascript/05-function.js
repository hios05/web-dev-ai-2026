//1. 매개변수 X , 리턴값 X

function sayHello() {
  console.log("안녕하세요");
}

sayHello(); //함수 호출

//2. 매개변수 O, 리턴값 X
// 매개변수가 필요할 때 - 일정 명령값만 바뀌어서 호출해야 할 때
function greet(name) {
  console.log(`${name}님, 안녕하세요!`);
}

greet("홍서윤");
greet("김세현");

// 3. 매개변수 X, 리턴값 O
// return : 함수 호출 결과, 종료

function getNumber() {
  return 1049;
}
console.log(getNumber());

// 4. 매개변수 O, 리턴값 O
// 파라미터는 입력, 리턴은 출력

function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// 변수의 유효범위 (scope)
const num1 = 100; //전역변수

function sample1() {
  const num1 = 200; // 지역변수 : 함수 밖에서 안쪽 변수는 접근 불가
  console.log("sample1 내부 : " + num1);
}

console.log("sample1 외부 : " + num1);
sample1();

// 선언적 vs 익명 vs 화살표 함수

// 선언적 함수 (Function Declaration)
// 호이스팅 : 선언 이전에 호출이 가능한 상태

console.log("선언적 함수 : " + multiply(10, 20));

function multiply(a, b) {
  return a * b;
}

// 익명 함수(Function Expression)
// 함수 이름이 없음, 변수에 할당 (호이스팅 불가)

const subtract = function (a, b) {
  return a - b;
};
console.log("익명 함수 : " + subtract(10, 20));

// 화살표 함수 (Arrow function) : function 대신 => 사용

const divide = (a, b) => {
  return a / b;
};
console.log("화살표 함수 : " + divide(10, 20));

// 콜백 함수
// 다른 함수의 파라미터로 전달되는 함수

function callFunc(callback) {
  console.log("함수 호출 전!");
  callback(call);
  console.log("함수 호출 후!");
}

function call() {
  console.log("안녕하세요~ 이걸 콜백 함수 호출!");
}

callFunc(call);

// 배열 관련 콜백 함수들 -> forEach

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i], i);
}

numbers.forEach((value, index, array) => {
  console.log(value, index, array);
});

//2. 배열 값을 각 2배로 만들어 출력 - map

const doubled = [];
numbers.forEach((value) => {
  doubled.push(value * 2);
});
console.log(doubled);

const doubleMap = numbers.map((value) => {
  return value * 2;
});

console.log(doubleMap);

//3. 짝수만 출력\

const even = [];
numbers.forEach((value) => {
  if (value % 2 === 0) even.push(value);
});
console.log(even);

numbers.filter((value) => value % 2 === 0);
console.log(even);

//reduce ((accumulator 누적된 값, value, index, array) => {}, 초기값)
// 배열의 값을 누적하여 하나의 값으로 변환시키다
const sumReduce = numbers.reduce((acc, value) => {
  console.log(`acc: ${acc}, value: ${value}`);
  return acc + value;
}, 0);
