// HTML을 JS로 가져오기 - querySelector -> id 모두 가져오기
const id = document.querySelector("#id");
const idCheck = document.querySelector("#idCheck");
const pwd = document.querySelector("#pwd");
const pwdCheck = document.querySelector("#pwdCheck");
const pwdDouble = document.querySelector("#pwdDouble");
const pwdDoubleCheck = document.querySelector("#pwdDoubleCheck");
const username = document.querySelector("#username");
const nameCheck = document.querySelector("#nameCheck");
const email = document.querySelector("#email");
const emailCheck = document.querySelector("#emailCheck");
const phone = document.querySelector("#phone");
const phoneCheck = document.querySelector("#phoneCheck");
const signup = document.querySelector("#signup");
const cancel = document.querySelector("#cancel");

let check1 = false;
let check2 = false;
let check3 = false;
let check4 = false;
let check5 = false;
let check6 = false;

// 이벤트가 입력하는 순간 - 6개, 버튼 클릭 - 2개
const inputCheck = (input, reg, inputCheck, message) => {
  input.addEventListener("input", () => {
    const regExp = reg;
    if (regExp !== null) {
      if (regExp.test(input.value)) {
        inputCheck.textContent = "OK!";
        inputCheck.style.color = "#0063b2";
        if (
          input.getAttribute("id") === "pwd" &&
          input.value === pwdDouble.value
        ) {
          pwdDoubleCheck.textContent = "OK!";
          pwdDoubleCheck.style.color = "#0063b2";
        }
        if (input.getAttribute("id") === "id") check1 = true;
        if (input.getAttribute("id") === "pwd") check2 = true;
        if (input.getAttribute("id") === "username") check4 = true;
        if (input.getAttribute("id") === "email") check5 = true;
        if (input.getAttribute("id") === "phone") check6 = true;
      } else if (input.value === "") {
        inputCheck.textContent = message;
        inputCheck.style.color = "#707070";
        if (input.getAttribute("id") === "pwd") {
          pwdDoubleCheck.textContent = "위 비밀번호와 동일하게";
          pwdDoubleCheck.style.color = "#707070";
        }
        if (input.getAttribute("id") === "id") check1 = false;
        if (input.getAttribute("id") === "pwd") check2 = false;
        if (input.getAttribute("id") === "username") check4 = false;
        if (input.getAttribute("id") === "email") check5 = false;
        if (input.getAttribute("id") === "phone") check6 = false;
      } else {
        inputCheck.textContent = message;
        inputCheck.style.color = "red";
        if (pwdDouble.value !== "" && input.getAttribute("id") === "pwd") {
          pwdDoubleCheck.textContent = "위 비밀번호와 동일하게";
          pwdDoubleCheck.style.color = "red";
        }
        if (input.getAttribute("id") === "id") check1 = false;
        if (input.getAttribute("id") === "pwd") check2 = false;
        if (input.getAttribute("id") === "username") check4 = false;
        if (input.getAttribute("id") === "email") check5 = false;
        if (input.getAttribute("id") === "phone") check6 = false;
      }
    } else {
      // 예외!
      if (input.value === pwd.value) {
        inputCheck.textContent = "OK!";
        inputCheck.style.color = "#0063b2";
        if (input.getAttribute("id") === "pwdDouble") check3 = true;
      } else if (input.value === "") {
        inputCheck.textContent = message;
        inputCheck.style.color = "#707070";
        if (input.getAttribute("id") === "pwdDouble") check3 = false;
      } else {
        inputCheck.textContent = message;
        inputCheck.style.color = "red";
        if (input.getAttribute("id") === "pwdDouble") check3 = false;
      }
    }

    if (check1 && check2 && check3 && check4 && check5 && check6) {
      signup.disabled = false; // 클릭 이벤트가 활성화
    } else {
      signup.disabled = true;
    }
  });
};

inputCheck(
  id,
  /^[a-zA-z][a-zA-Z0-9]{3,11}$/,
  idCheck,
  "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내",
);

inputCheck(
  pwd,
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!-/:-@[-`{-~])[A-Za-z\d!-/:-@[-`{-~]{8,15}$/,
  pwdCheck,
  "영문자, 숫자, 특수문자 조합으로 8~15자 이내",
);

inputCheck(pwdDouble, null, pwdDoubleCheck, "위 비밀번호와 동일하게");

inputCheck(username, /^[가-힣]{2,}$/, nameCheck, "한글 2자 이상");

inputCheck(
  email,
  /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/,
  emailCheck,
  "이메일 형식",
);

inputCheck(phone, /^010-[0-9]{4}-[0-9]{4}$/, phoneCheck, "전화번호 형식");

signup.addEventListener("click", () => {
  alert("회원가입 완료!");
});
cancel.addEventListener("click", () => {
  location.reload();
});
