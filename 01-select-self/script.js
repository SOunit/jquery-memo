$(document).ready(function () {
  console.log('jQuery!!!');
  var $parentElementList = $('.parent');
  console.log($parentElementList);

  $parentElementList.click(function (event) {
    console.log(event.currentTarget.classList.toggle('underline'));
  });
});
