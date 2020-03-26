$(function() {
  function createComponents(data) {
    // デバッグ用
    console.log(data)
    for (var item of data) {
      var card = $('<div class="card" />')
      card.append(
        `<div class="card__img" style="background: url(${item.image}) center center /cover no-repeat;)">`
      )
      var content = $('<div class="card__content" />')
      content.append(`<p class="card__title">${item.title}</p>`)
      content.append(`<p class="card__price">¥${item.price}</p>`)
      content.append(`<p class="button -add">カートに追加する</p>`)
      card.append(content)
      $('#data-list').append(card)
    }
    // 追加ボタン
    $('.button.-add').click(() => {
      $('#add-item-info').fadeIn(200)
      $('#overlay').fadeIn(200)
    })

    // クローズボタン
    $('.-close').click(() => {
      $('.dialog').fadeOut(200)
      $('#overlay').fadeOut(200)
    })
  }

  // 非同期通信でスプレッドシートにアクセス
  $.ajax({
    type: 'GET',
    url:
      'https://script.googleusercontent.com/macros/echo?user_content_key=A9rwD3q6iW56ryFnjwZW0RPR9zViaYTxuVDfYNgtuQVZbtYPxAWU7WqAME-5d2u8ZlvCKZEG_M1CMqWRKt8n99kFOp8RLPojm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNjDormi7dDf_iAVTk6d9DsDIJDrVGA0yPGI1HjW7r86J8PZXksDPsxBen-tXooaxtpytj_A4aoE&lib=MbDqqZI-RDYN9YjPlKd_9ritdWIQOAUuY',
    success: json => {
      $('#loading').hide()
      createComponents(json)
    },
  })
})
