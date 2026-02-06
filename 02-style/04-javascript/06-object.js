/* 
사람 {
//특징들! => 변수
이름,
나이,
사는 곳}

//행동들! => 함수 (기능)
일어난다
밥먹는다
씻는다
옷입는다
나간다
*/

//변수
const person = {
  name: "김현우",
  age: 10,
  city: "서울",

  //함수
  hello() {
    console.log(`안녕하세요! 저는 ${this.name} 입니다.`); // this : 본인 자체
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);

// 객체 생성과 속성 / 함수 추가

const person1 = {};
person1.name = "홍서윤";
person1.name = "홍진오"; // 뒤에 쓰는 것으로 수정 가능
console.log(person1.name);
person1["age"] = 9; // 객체 추가 가능
console.log(person1.age);

person1.hello = function () {
  console.log(
    `안녕하세요! 저는 ${this.name}이고, 나이는 ${this.age}살 입니다.`,
  );
};
console.log(person1);
person1.hello();

const person2 = new Object(); // 잘 안 씀. 중괄호 객체생성과 동일 기능.
person2.name = "홍서윤";
console.log(person2.name);

// this

const person3 = {
  name: "김세현",
  hello: function () {
    console.log(`익명 함수 ${this.name}`);
  },
};

const person4 = {
  name: "노희진",

  // 화살표 함수 내에서 this -> 전역 개체인 window (고로 내가 정한걸 지정하기 어려워 잘 쓰지 않음)
  // console.log(this.alert(`안녕하세요!`));
  hello: () => {
    console.log(`화살표 함수 ${this.name}`);
  },
};

person3.hello();
person4.hello();

// 생성자 함수, 클래스
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(`안녕? 나는 ${this.name} 이고, ${this.age} 살이야.`);
  };
}

const p1 = new Person("박한별", 24);
const p2 = new Person("신영은", 22);
p1.hello();
p2.hello();

// 객체 생성 시 호출
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(`안녕? 나는 ${this.name} 이고, ${this.age} 살이야.`);
  }
}
const p3 = new Person2("이나경", 24);
p3.hello();
