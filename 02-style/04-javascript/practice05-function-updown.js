let random;
let Input;
let result;
let count = 0;

function getTarget() {
  return Math.floor(Math.random() * 100) + 1;
}

function setInput() {
  return prompt("숫자를 입력하세요");
}

function judge(random, Input) {
  if (Input === null) {
    return "null";
  }

  if (
    isNaN(Input) ||
    Input === "" ||
    Number(Input) < 1 ||
    Number(Input) > 100
  ) {
    return "error";
  }

  if (Number(Input) === random) {
    return "correct";
  } else if (Number(Input) > random) {
    return "down";
  } else if (Number(Input) < random) {
    return "up";
  }
}

function play() {
  const random = getTarget();
  count = 0;

  // while (true) : 조건이 충족될 때까지 전체반복
  // 무한반복일 시, 종료되는 시점 (break)을 먼저 짤 것

  while (true) {
    count++;
    const input = setInput();
    const result = judge(random, input);

    if (result === "null") break;
    if (result === "error") {
      alert("1~100 사이의 숫자를 입력해주세요.");
      continue;
    }

    // 비어있는 걸 보냈다거나
    // 숫자인데 1~100까지 숫자가 아인 경우 (continue)

    //끝나는 시점! 내가 입력한 input값이 랜덤 값을 맞출 때 종료

    if (result === "correct") {
      alert(`정답입니다. ${count}번 만에 맞추셨습니다.`);
      break;
    } else if (result === "down") {
      alert("해당 숫자보다 작습니다.");
    } else if (result === "up") {
      alert("해당 숫자보다 큽니다.");
    } else {
      alert("잘못된 입력입니다.");
    }
  }
}

play();
