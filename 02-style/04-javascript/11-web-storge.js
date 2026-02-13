const setSession = document.querySelector("#setSession");
setSession.addEventListener("click", () => {
  // 클릭 이벤트 발생 시
  sessionStorage.setItem("session", "세션");
});

const getSession = document.querySelector("#getSession");
getSession.addEventListener("click", () => {
  sessionStorage.getItem("session");
  alert(session);
});

// 데이터 삭제
const removeSession = document.querySelector("#removeSession");
removeSession.addEventListener("click", () => {
  sessionStorage.removeItem("session");
});

// 데이터 전체 삭제
const clearSession = document.querySelector("#clearSession");
clearSession.addEventListener("click", () => {
  sessionStorage.clear();
});

// 로컬에 저장 & 수정  -> 무조건 같은 문자열
// 객체 자체를 직접 넣으면 안들어가져요! -> 객체 -> 문자열로 변경해서 추가
const setLocal = document.querySelector("#setLocal");
setLocal.addEventListener("click", () => {
  localStorage.setItem("local", "로컬");
  localStorage.setItem("user", { name: "홍서윤", age: 22 });
});

const getLocal = document.querySelector("#getLocal");
setLocal.addEventListener("click", () => {
  alert(localStorage.getItem("user"));
  console.log(JSON.parse("user"));
});

const removeLocal = document.querySelector("#removeLocal");
removeLocal.addEventListener("click", () => {
  localStorage.removeItem("local");
});
const clearLocal = document.querySelector("#clearLocal");
clearLocal.addEventListener("click", () => {
  localStorage.clear();
});
