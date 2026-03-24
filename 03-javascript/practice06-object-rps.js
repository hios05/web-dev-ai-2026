function getRandom() {
  return Math.floor(Math.random() * 3);
}

function getInput() {
  return prompt("가위, 바위, 보 중 하나를 입력해주세요.");
}

function Game() {
  const rps = ["가위", "바위", "보"];

  const player = {};

  this.win = 0;
  this.lose = 0;
  this.draw = 0;

  this.play = function () {
    while (true) {
      const input = getInput();

      if (input === null) {
        alert(`게임을 종료합니다. ${this.win}승 ${this.lose}패 ${this.draw}무`);
        break;
      }

      const playerIndex = rps.indexOf(input);

      if (playerIndex === -1) {
        alert("잘못된 입력입니다.");
        continue;
      }

      const random = getRandom();
      console.log(random);

      const computer = rps[random];

      if (playerIndex - random === 0) {
        alert(`${input} vs ${computer} 비겼습니다.`);
        this.draw++;
      } else if (playerIndex - random === 1 || playerIndex - random === -2) {
        alert(`${input} vs ${computer} 이겼습니다.`);
        this.win++;
      } else {
        alert(`${input} vs ${computer} 졌습니다.`);
        this.lose++;
      }
    }
  };
}
const game = new Game();
game.play();
