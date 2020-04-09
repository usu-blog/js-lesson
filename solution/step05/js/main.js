$(function() {
  // アコーディオンの場所を指定
  var ac = $('#sample-accordion').find('.accordion__title')
  ac.click(function() {
    $(this) // クリックしたものを指定する
      .next() // クリックした要素の次にあるものを指定
      .stop() // 連続のクリック動作のキャンセル
      .slideToggle() // スライドで表示非表示
  })
})
