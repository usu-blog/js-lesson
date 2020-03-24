# STEP00 開発環境を整えよう

## VSCode をインストールして以下の拡張機能を入れよう

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

## Live Server と Live Sass Compiler を立ち上げよう

- LiveServer はプレビューで表示したい HTML ファイルを右クリックし「Open width Liver Server」を選択
- LiverSassCompiler は SCSS ファイルを開いている箇所で VSCode 内 Footer の「Watch Sass」をクリック

## HTML ファイルから CSS と JavaScript を読み込ませよう

以下のコードに適切なパスを入れてください。  
ヒント"./css/sample.css"

```html
<!-- CSSを読み込む -->
<link rel="stylesheet" href="" />
<!-- JavaScriptを読み込む -->
<script src=""></script>
```

## SCSS で CSS のクラスを作ってみよう

以下のコードを SCSS のファイルに追記し、HTML にクラスを追加

```scss
.red {
  color: tomato;
}
```

CSS のファイルにコードが生成されているのを確認

## CSS ファイルにあるクラスを追加してみよう

```html
<!-- CSSファイルにあるクラスを追加してみよう -->
<h1>Hello World</h1>
```
