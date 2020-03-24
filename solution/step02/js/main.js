var btn = document.getElementById('hello-world-button')

btn.addEventListener('click', function() {
  // percentは降水確率
  var percent = 60
  // weatherに天気の結果が入る
  var weather = WeatherCheck(percent)
  // alertで画面に表示
  alert(`天気は、${weather}です！`)
})

/**
 * percentが20未満で`晴れ`
 * percentが20 ~ 59で`曇り`
 * percentが60以上で`雨`に修正して欲しい
 * @param {*} percent
 */
function WeatherCheck(percent) {
  if (percent < 20) {
    return '晴れ'
  } else if (percent < 60) {
    return '曇り'
  } else {
    return '雨'
  }
}
