// getElementByIdでHTMLのボタンを割り当てます。
// (以下の""には設定したボタンのidを入れます。)
var btn = document.getElementById('hello-world-button')

// クリックイベントを待ちます
btn.addEventListener('click', function() {
  // alertで画面上に「Hello World」が表示されます。
  alert('Hello World')
})
