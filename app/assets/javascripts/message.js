$(function(){

  function buildHTML(message) {
    if (message.image) {
      var html =
        `<div class="main-content">
          <div class="main-content__header">
            <p class="nain-content__header__name">
              ${message.name}
            </p>
            <p class="main-content__header__date">
              ${message.created_at}
            </p>
          </div>
            <p class="main-content__message">
              ${message.content}
            </p>
            <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="main-content">
          <div class="main-content__header">
            <p class="nain-content__header__name">
              ${message.name}
            </p>
            <p class="main-content__header__date">
              ${message.created_at}
            </p>
          </div>
            <p class="main-content__message">
              ${message.content}
            </p>
        </div>`
      return html;
    }
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(date) {
      var html = buildHTML(date);
      $('.group-messages').append(html);
      $('form')[0].reset();
      $(".group-messages").animate({scrollTop: $(".group-messages")[0].scrollHeight});
      $('.input-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});