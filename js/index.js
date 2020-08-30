let btns = document.querySelectorAll(".list i");
let ems = document.querySelectorAll(".info em");
let counts = document.querySelectorAll(".list em");
let subTotals = document.querySelectorAll(".list strong");
btns.forEach((item, index) => {
  item.onclick = function () {
    // console.log(this);
    let par = this.parentNode,
      count = par.querySelector("em"),
      n = count.innerText,
      strongs = par.querySelectorAll("span strong"),
      price = strongs[0],
      subTotal = strongs[1];
    if (index % 2 === 0) {
      n--;
      n < 0 ? (n = 0) : null;
    } else {
      n++;
    }
    count.innerText = n;
    subTotal.innerText = parseFloat(price.innerText) * n + "元";
    computed();
  };
});

function computed() {
  let allCount = 0,
    allMoney = 0,
    allPrice = [];
  counts.forEach((item) => {
    allCount += parseFloat(item.innerText);
  });
  subTotals.forEach((item, index) => {
    let val = parseFloat(item.innerText);
    if (index % 2 !== 0) {
      allMoney += val;
    } else {
      // console.log(item.nextElementSibling.innerText);
      if (parseFloat(item.nextElementSibling.innerText) !== 0) {
        allPrice.push(val);
      }
    }
  });
  ems[0].innerText = allCount;
  ems[1].innerText = allMoney;
  console.log(allPrice);
  allPrice = allPrice.length > 0 ? allPrice : [0];
  ems[2].innerText = Math.max(...allPrice);
}
