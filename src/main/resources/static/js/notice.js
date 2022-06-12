$(document).ready(function () {
  const userInfo = sessionStorage.getItem("userInfo");
  if (userInfo === null) location.replace("./login.html");

  $("#user-name").text(userInfo);
  $(".user-menu").each((index, ele) => {
    $(ele).toggleClass("state");
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

window.onload = function () {
  let notList = localStorage.getItem("not");
  let noticearr = [];
  let updateIdx = -1;
  // let notContView = document.getElementById("notice-content");
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let YMD = "";
  YMD = YMD + year + month + date;
  if (notList) {
    noticearr = JSON.parse(notList);
    viewList(noticearr);
    $("tbody").on("click", "input[value =삭제]", function () {
      var idx = $(this).parent().parent().contents().first().text();
      $(this).parent().parent().remove();
      noticearr.splice(idx - 1, 1);
      localStorage.setItem("not", JSON.stringify(noticearr));
      viewList(noticearr);
    });
    $("tbody").on("click", "td[id =popUpNotice]", function () {
      var idx1 = $(this).parent().contents().first().text();
      updateIdx = idx1;
      var myModal2 = document.getElementById("myModal2");
      var titContent = document.getElementById("form-title");
      var conContent = document.getElementById("form-content");
      titContent.setAttribute("value", noticearr[idx1 - 1].title);
      conContent.innerText = noticearr[idx1 - 1].tacontent;
      myModal2.style.display = "block";
    });
  }
  var newBtn = document.getElementById("newnotice-btn");
  var myModal = document.getElementById("myModal");
  var myModal2 = document.getElementById("myModal2");
  newBtn.addEventListener("click", function () {
    myModal.style.display = "block";
  });
  setModal(myModal);
  setModal(myModal2);

  myModal
    .querySelector(".modal_regit_btn")
    .addEventListener("click", function () {
      const title = document.getElementById("title").value;
      const tacontent = document.getElementById("tacontent").value;
      const date = YMD;
      if (title.length < 4) alert("제목 길이를 지켜주세요😥");
      else {
        not = {
          title: title,
          tacontent: tacontent,
          date: date,
        };
        noticearr.push(not);
        localStorage.setItem("not", JSON.stringify(noticearr));
        location.reload();
      }
    });

  myModal
    .querySelector(".modal_close_btn")
    .addEventListener("click", function () {
      document.getElementById("title").value = "";
      document.getElementById("tacontent").value = "";
      myModal.style.display = "none";
    });
  myModal2
    .querySelector(".modal_close_btn")
    .addEventListener("click", function () {
      myModal2.style.display = "none";
    });
  myModal2
    .querySelector(".modal_update_btn")
    .addEventListener("click", function () {
      if (updateIdx == -1) return;
      var title = document.getElementById("form-title").value;
      var tacontent = document.getElementById("form-content").value;
      console.log(title);
      console.log(title.length);
      if (title.length < 4) {
        alert("제목이 형식에 맞지 않아 수정되지 않았습니다");
        return;
      } else {
        noticearr[updateIdx - 1].title = title;
        noticearr[updateIdx - 1].tacontent = tacontent;
        localStorage.setItem("not", JSON.stringify(noticearr));
        window.location.reload("./notice.html");
      }
    });
  myModal2.querySelector("#modify").addEventListener("click", function () {
    myModal2.style.display = "block";
    document.getElementById("form-title").readOnly = false;
    document.getElementById("form-content").readOnly = false;
  });
};

function viewList(a) {
  let notContView = document.getElementById("notice-content");
  var len = a.length;
  var notice = "";
  for (var i = 0; i < len; i++) {
    notice += `<tr><td id ="num">${i + 1}</td><td id ="popUpNotice">${
      a[i].title
    }</td><td>${
      a[i].date
    }</td><td><input type="button" class="btn btn-danger" value="삭제"/></td></tr>`;
  }
  notContView.innerHTML = notice;
}

function setModal(a) {
  a.setAttribute("position", "fixed");
  a.setAttribute("display", "block");
  a.setAttribute(
    "boxShadow",
    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  );
  a.setAttribute("top", "50%");
  a.setAttribute("left", "50%");
  a.setAttribute("transform", "translate(-50%, -50%)");
  a.setAttribute("msTransform", "translate(-50%, -50%)");
  a.setAttribute("webkitTransform", "translate(-50%, -50%)");
}
