// 로또 번호 정하기

let value = [];

function getRandom() {
  return Math.floor(Math.random() * 45) + 1;
}
while (value.length < 7) {
  // 조건이 필요할 때는 while 조건문을 쓴다
  const random = getRandom();
  if (!value.includes(random)) {
    value.push(random);
  }
}

const bonus = value[value.length - 1];
value = value.slice(0, 6);
[(value.length = 6)];

console.log(`로또 번호 : ${value}`);
console.log(`보너스 번호 : ${bonus}`);

// 내 값 정하기

const input = [];

function getTarget() {
  return Math.floor(Math.random() * 45) + 1;
}
while (input.length < 6) {
  const my = getTarget();
  if (!input.includes(my)) {
    input.push(my);
  }
}

console.log(`뽑은 번호 : ${input}`);

// 결과값 도출
