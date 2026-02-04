const getTarget = Math.floor(Math.random() * 10) + 1;
console.log(getTarget);

let count = 0;

while (true) {
  count++;
  const setInput = prompt("숫자를 입력하세요");
  console.log(setInput);

  if (setInput === null) break;

  if (Number(setInput) === getTarget) {
    alert(`정답입니다. ${count}번 만에 맞추셨습니다.`);
    break;
  } else if (Number(setInput) > getTarget) {
    alert("해당 숫자보다 작습니다.");
  } else if (Number(setInput) < getTarget) {
    alert("해당 숫자보다 큽니다.");
  } else {
    alert("잘못된 입력입니다.");
  }
}
