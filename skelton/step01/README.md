# STEP01 JavaScript で「Hello World」してみよう

## HTML のボタンに id を割り当てよう

```html
<!-- HTML のボタンに id を割り当てよう -->
<button class="button">CLICK</button>
```

## JavaScript のコードを書こう

```js
// getElementByIdでHTMLのボタンを割り当てます。
// (以下の""には設定したボタンのidを入れます。)
var btn = document.getElementById('')

// クリックイベントを待ちます
btn.addEventListener('click', function() {
  // alertで画面上に「Hello World」が表示されます。
  alert('Hello World')
})
```
