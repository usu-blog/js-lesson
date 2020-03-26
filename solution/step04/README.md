# STEP04: jQuery を使ってみよう

## jQuery の CDN を追加しよう

「jquery google cdn」などで検索すると出てくる以下のサイト

- [Hosted Libraries](https://developers.google.com/speed/libraries)

jQuery3 の現在のバージョンの CDN は以下です。

```html
<!-- jQuery の CDN を追加しよう -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

html で呼び出している`main.js`の前に記述しましょう。  
そうすると main.js のなかで jQuery が使えるようになります。

## コードを入れてみよう

```js
$(function() {
  // アコーディオンの場所を指定
  var ac = $('#sample-accordion').find('.accordion__title')
  ac.click(function() {
    ac.next() // クリックした要素の次にあるものを指定
      .slideToggle() // スライドで表示非表示
  })
})
```

## バグを修正してみよう 01

現状のままだとクリックすると全てのアコーディオンが開いてしまう。  
クリックしたものだけが開くようにしたい。

ヒントは、`$(this)`

## バグを修正してみよう 02

現状のままだとアコーディオンの部分をクリック連打するとクリックした回数開いたり閉じたりしようとします。何度連打しても大丈夫なようにしたい。

ヒントは`stop()`
