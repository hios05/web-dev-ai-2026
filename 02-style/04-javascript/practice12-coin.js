const coin = document.querySelector("#coin"); // html에서 JS로 가져오는 역할

// API를 서버로 가져오려면 fetch 함수를 제공하며, 반드시 문자열로 불러와야 한다
// 부르기 위해 순서를 지연시키는 역할이 await이며, 이는 async 함수 안에 들어가야 한다.
const fetchapi = async () => {
  const response = await fetch(
    "https://api.upbit.com/v1/market/all?quote_currencies=KRW",
  );
  const data = await response.json();

  // map함수 = return 값으로 배열을 만들어줌
  const markets = data.map((value) => {
    return value.market;
  });
  console.log(markets);

  const response2 = await fetch(
    `https://api.upbit.com/v1/ticker?markets=${markets.join(",")}`,
  );

  const data2 = await response2.json();

  // find 함수

  const mapdata = data.map((value) => {
    const result = data2.find((item) => item.market === value.market);
    return { ...value, ...result };
  });

  console.log(mapdata);

  // 화면에 드러나는 코드
  mapdata.forEach((value) => {
    // console.log(value.market);
    // console.log(value.korean_name);

    const className = value.change.toLowerCase();

    coin.innerHTML += `
    <div class="card ${className}">
    <h2> ${value.korean_name}</h2>
     <p>${value.trade_price} 원</p>
     <p class= "rage">${value.change}</p>
     <p>${value.change_rate} 원</p>
     </div>
     `;
  });
};

// for (let i = 0; i < data.length; i++) 출력값 동일
// for (let i in data) {console.log(data[i]);}

fetchapi(); // 여기까지 썼을 때 status 2nn이 뜸 : 성공에러
