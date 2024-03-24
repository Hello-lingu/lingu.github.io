let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  //prompt函数弹出一个对话框，并获取输入
  let myName = prompt("请输入你的名字。");
  //setItem函数创建一个“name”的数据项，并把myName复制进去
  if ( !myName ) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了, " + myName;
  }
}

if ( !localStorage.getItem("name") ) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
