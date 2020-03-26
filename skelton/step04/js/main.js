$(function() {
  // アコーディオンの場所を指定
  var ac = $('#sample-accordion').find('.accordion__title')
  ac.click(function() {
    ac.next() // クリックした要素の次にあるものを指定
      .slideToggle() // スライドで表示非表示
  })
})
