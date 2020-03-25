# STEP04: jQuery を使ってみよう

## jQuery の CDN を追加しよう

「jquery google cdn」などで検索すると出てくる以下のサイト

- [Hosted Libraries](https://developers.google.com/speed/libraries)

jQuery3 の現在のバージョンの CDN は以下です。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

html で呼び出している`main.js`の前に記述しましょう。  
そうすると main.js のなかで jQuery が使えるようになります。
