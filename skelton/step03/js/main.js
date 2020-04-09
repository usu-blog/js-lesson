// ボタン
var btn = document.getElementById('create-box-action')
// ボックスが入るブロック
var block = document.getElementById('color-box-block')

btn.addEventListener('click', function () {
  // ループ分で自動化したい
  const arr = ['red', 'blue', 'green']
  // for
  createColorBox('red')
  createColorBox('blue')
  createColorBox('green')

  // forEach
  createColorBox('red')
  createColorBox('blue')
  createColorBox('green')
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
