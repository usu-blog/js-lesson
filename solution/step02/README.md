# STEP02 if 文を使ってみよう

## 降水確率(percent)によって出力が変わる天気を表示しよう

以下の条件で動作するものが作りたい

- percent が 20 未満で`晴れ`
- percent が 20 ~ 59 で`曇り`
- percent が 60 以上で`雨`に修正して欲しい

```js
/**
 * percentが20未満で`晴れ`
 * percentが20 ~ 59で`曇り`
 * percentが60以上で`雨`に修正して欲しい
 * @param {*} percent
 */
function WeatherForecast(percent) {
  if (percent < 20) {
    return '晴れ'
  } else {
    return '雨'
  }
}
```

## デバッグをして確かめる

コードを書くときはバグを見つけるために色々なデータに書き換えてバグを発見します。  
今回は、`percent`の値によって天気が変わるので条件を満たす`percent`必要最低限の通りを試してみましょう。
