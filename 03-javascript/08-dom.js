// 문서 객체 가져오기
console.log(document.body);

// 태그로 가져오기
console.log(document.getElementsByTagName("h1"));

// class로 가져오기
console.log(document.getElementsByClassName("testClass"));

// name으로 가져오기
console.log(document.getElementsByName("testName"));

// id로 가져오기
console.log(document.getElementById("testId"));

// querySelector(선택자) : 1개 선택
// querySelectorAll(선택자) : 여러개 선택
// -> 이 두 가지만 아셔도 괜찮아요!
console.log(document.querySelector("#testId2"));
console.log(document.querySelectorAll("div"));

// 문서 객체 조작하기
// 1. 웹 페이지의 div 태그를 찾아 리스트로 가져오고, 목록을 editDivs에 저장한다.
const editDivs = document.querySelectorAll("div");

// 2.  textContent: 객체를 순수한 글자로 취급하여 넣는다.
editDivs[0].textContent = "안녕하세요";

// 3. 내용을 HTML코드로 해석해서 보여준다. (<span> 필요)
editDivs[1].innerHTML = "<span>안녕하세요</span>";

// 속성 조작
const editDiv = document.querySelector("#testId");

// 형식:  setAttribute("속성명","속성값")
editDiv.setAttribute("data-test", "테스트");
console.log(editDiv.getAttribute("data-test")); // 콘솔에는 속성값인 "테스트"가 출력된다.
editDiv.removeAttribute("data-test");

// 스타일 조작
editDiv.style.color = "orange";
editDiv.style.backgroundColor = "yellow";

// classList 조작
const div2 = document.querySelector("#testId2");
div2.classList.add("active");
console.log(div2.classList.contains("active")); // 해당 클래스명을 가지고 있는지? - true
div2.classList.remove("active");
console.log(div2.classList.contains("active")); // 위에서 제거했으므로 false
// 중요!! 스위치 같은 기능. "active"가 있으면 제거, 없으면 삭제한다.
div2.classList.toggle("active");
console.log(div2.classList.contains("active"));

// 문제 1. 텍스트 출력
const result1 = document.querySelector("#result1");
function printText() {
  result1.innerHTML = "안녕하세요";
}

// 문제 2. input 값 출력
const result2 = document.querySelector("#result2"); // 결과를 보여줄 공간
const customer = document.querySelector("#customer"); // 글을 입력할 공간
const printInputValue = () => {
  result2.textContent = customer.value;
  customer.value = ""; // customer 요소(입력창)의 값을 다시 빈 문자열("")로 설정
}; //

// 문제 3. div 색상 변경
const colorBox = document.querySelector("#colorBox");
const changeColor = () => {
  colorBox.style.backgroundColor = "yellow";
};
// 문제 4. 문자열 길이 출력
const text = document.querySelector("#text");
const result4 = document.querySelector("#result4");
function stringLength() {
  // result4 란에 textContent의 문자열 길이를 보여준다.
  result4.textContent = text.value.length;
  text.value = "";
}

// 3. 문서 객체 추가/삭제
const testId3 = document.querySelector("#testId3");
// testId3.innerHTML = "<p>텍스트 추가</p>";
const p = document.createElement("p"); // p: 문단 만들기, 문자열이 표시될 위치 지정
p.textContent = "텍스트 추가";
testId3.appendChild(p); // 부모 요소 #textId3에 자식 요소 p를 붙여 화면에 텍스트가 나타나게 함

const pTarget = document.querySelector("#testId3 p");
pTarget.remove(); // 다시 삭제

// 문제 5. 문자열 분리 ul 출력
const la = document.querySelector("#la");

// 콤마 (,) 를 통해 주어진 긴 문장을 쪼갬
const laArr = la.textContent.split(",");
const result5 = document.querySelector("#result5");

const stringSplit = () => {
  const ul = document.createElement("ul");
  for (value of laArr) {
    const li = document.createElement("li");
    li.textContent = value.trim(); // 글자 양옆 불필요한 공백 제거
    ul.appendChild(li); // 완성된 li 를 ul 앞에 붙임
  }
  result5.appendChild(ul);
};

// 문제 6. li 요소 추가 & 삭제
const list = document.querySelector("#list");
function addItem() {
  //const li = document.createElement("li");
  //li.textContent = "아이템 추가";
  //list.appendChild(li);
  list.innerHTML += "<li>아이템 추가</li>";
}
function removeItem() {
  const item = document.querySelector("#list li");
  // li 값이 많아도 가장 위에 있는 하나만 가져온다.
  item.remove();
}

// 문제 7. 클래스 토글
const result9 = document.querySelector("#result9");
function toggleClass() {
  /*
  if (result9.classList.contains("toggle")) {
    // toggle 클래스가 포함 된 경우
    result9.classList.remove("toggle");
  } else {
    // 포함되지 않은 경우
    result9.classList.add("toggle");
  }*/
  result9.classList.toggle("toggle"); // classlist - class를 관리하는 도구
}
// 문제 8. 장바구니 리스트
const item = document.querySelector("#item");
const price = document.querySelector("#price");
const cart = document.querySelector("#cart");
const total = document.querySelector("#total span");
let sum = 0;
function addToCart() {
  // innerHTML += :  기존 목록을 지우지 않고, 그 뒤에 덧붙인다는 뜻

  cart.innerHTML += `<li>${item.value} - ${price.value}</li>`; // 사과 - 1000
  // 중요!! Number로 바꿔주지 않으면 1000+2000 = 10002000처럼 작동함.
  // +=는 값을 버리지 말고 누적해서 계산하라는 뜻
  sum += Number(price.value);
  item.value = "";
  price.value = "";
  total.textContent = sum;
}
