$(document).ready(function () {
  const userInfo = sessionStorage.getItem("userInfo");
  if (userInfo === null) location.replace("./login.html");
  const members = JSON.parse(localStorage.getItem("members"));
  const user = members[sessionStorage.getItem("userIdx")];
  const nowArea = new Set(user.area);
  const area = {
    청운동: 10100,
    신교동: 10200,
    궁정동: 10300,
    효자동: 10400,
    창성동: 10500,
    통의동: 10600,
    적선동: 10700,
    통인동: 10800,
    누상동: 10900,
    누하동: 11000,
    옥인동: 11100,
    체부동: 11200,
    필운동: 11300,
    내자동: 11400,
    사직동: 11500,
    도렴동: 11600,
    당주동: 11700,
    내수동: 11800,
    세종로: 11900,
    신문로1가: 12000,
    신문로2가: 12100,
    청진동: 12200,
    서린동: 12300,
    수송동: 12400,
    중학동: 12500,
    종로1가: 12600,
    공평동: 12700,
    관훈동: 12800,
    견지동: 12900,
    와룡동: 13000,
    권농동: 13100,
    운니동: 13200,
    익선동: 13300,
    경운동: 13400,
    관철동: 13500,
    인사동: 13600,
    낙원동: 13700,
    종로2가: 13800,
    팔판동: 13900,
    삼청동: 14000,
    안국동: 14100,
    소격동: 14200,
    화동: 14300,
    사간동: 14400,
    송현동: 14500,
    가회동: 14600,
    재동: 14700,
    계동: 14800,
    원서동: 14900,
    훈정동: 15000,
    묘동: 15100,
    봉익동: 15200,
    돈의동: 15300,
    장사동: 15400,
    관수동: 15500,
    종로3가: 15600,
    인의동: 15700,
    예지동: 15800,
    원남동: 15900,
    연지동: 16000,
    종로4가: 16100,
    효제동: 16200,
    종로5가: 16300,
    종로6가: 16400,
    이화동: 16500,
    연건동: 16600,
    충신동: 16700,
    동숭동: 16800,
    혜화동: 16900,
    명륜1가: 17000,
    명륜2가: 17100,
    명륜4가: 17200,
    명륜3가: 17300,
    창신동: 17400,
    숭인동: 17500,
    교남동: 17600,
    평동: 17700,
    송월동: 17800,
    홍파동: 17900,
    교북동: 18000,
    행촌동: 18100,
    구기동: 18200,
    평창동: 18300,
    부암동: 18400,
    홍지동: 18500,
    신영동: 18600,
    무악동: 18700,
  };

  $("#user-name").text(userInfo);
  $(".user-menu").each((index, ele) => {
    $(ele).toggleClass("state");
  });
  Object.keys(area).forEach((x) => {
    $(
      `<button class="btn ${
        nowArea.has(x) ? "btn-success" : "btn-secondary"
      } mr-1 mb-1"></button>`
    )
      .append(`<span class="text">${x}</span>`)
      .on("click", function () {
        if ($(this).hasClass("btn-secondary")) {
          $(this).removeClass("btn-secondary");
          $(this).addClass("btn-success");
          nowArea.add($("span", this).text());
          members[sessionStorage.getItem("userIdx")].area = [...nowArea];
          localStorage.setItem("members", JSON.stringify(members));
        } else {
          $(this).removeClass("btn-success");
          $(this).addClass("btn-secondary");
          nowArea.delete($("span", this).text());
          members[sessionStorage.getItem("userIdx")].area = [...nowArea];
          localStorage.setItem("members", JSON.stringify(members));
        }
      })
      .appendTo($("#enroll-area-main"));
  });
});

$("#userDropdown").on("click", function () {
  $(".user-menu.state").toggleClass("show");
});

$("#logout-btn").on("click", function () {
  if (confirm("로그아웃 하시겠습니까?")) {
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("userIdx");
    location.replace("./index.html");
  } else {
    alert("로그아웃하지 않았습니다.");
  }
});
