// ボタン
var btn = document.getElementById('create-box-action')
// ボックスが入るブロック
var block = document.getElementById('color-box-block')

btn.addEventListener('click', function() {
  var colors = ['red', 'blue', 'green']
  // for文
  for (var color of colors) {
    createColorBox(color)
  }

  // forEach文
  colors.forEach(function(color) {
    createColorBox(color)
  })
})

// color-box-blockのなかにboxを生成
function createColorBox(colorName) {
  // div要素を生成
  var box = document.createElement('div')

  // classを追加
  box.className = 'color-box-block__box--' + colorName

  // 生成したdiv要素を追加する
  block.appendChild(box)
}
