let cartsModel = (function ($) {
  let $btns = $(".list i"),
    $counts = $(".list em"),
    $ems = $(".info em"),
    $totals = $(".list strong");
  function handleClick() {
    $btns.click(function () {
      //   console.log(this);
      let $this = $(this),
        n = $this.index(),
        $par = $this.parent(),
        $count = $par.children("em"),
        x = $count.html(),
        $strongs = $par.find("strong"),
        $price = $strongs.eq(0),
        $total = $strongs.eq(1);
      //   console.log(n, $par, $count);
      if (n === 0) {
        x--;
        x < 0 ? (x = 0) : null;
      } else {
        x++;
      }
      $count.html(x);
      $total.html(parseFloat($price.html()) * x + "元");
      computed();
    });
  }
  function computed() {
    let allCount = 0,
      allMoney = 0,
      maxPrice = [];
    $counts.each((index, item) => {
      //   console.log($(item).html());
      allCount += parseFloat($(item).html());
    });
    $totals.each((index, item) => {
      let val = parseFloat($(item).html());
      if (index % 2 == 0) {
        if (parseFloat($(item).next().html()) !== 0) {
          maxPrice.push(val);
        }
      } else {
        allMoney += val;
      }
    });
    // console.log(maxPrice);
    maxPrice = maxPrice.length > 0 ? maxPrice : [0];
    $ems.eq(0).html(allCount);
    $ems.eq(1).html(allMoney);
    $ems.eq(2).html(Math.max(...maxPrice));
  }
  return {
    init() {
      handleClick();
    },
  };
})(jQuery);

cartsModel.init();
