function mailchimpInit() {
    var $form = $('#mc-embedded-subscribe-form')
    if ($form.length > 0) {
      $('form input[type="submit"]').bind('click', function (event) {
        if (event) event.preventDefault()
        register($form)
      })
    }

    $("#gdpr_42342").click(function() {
        if(this.checked) {
            $('#subscribe-result').html('')
        }
    });
}

function register($form) {
    if($('#gdpr_42342').prop('checked')){
        $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                error: function (err) { console.log('Could not connect. Please try again later.',err) },
                success: function (data) {
                if (data.result === 'success') {
                    // Yeahhhh Success
                    console.log(data.msg)
                    $('#mce-EMAIL').css('borderColor', '#ffffff')
                    $('#subscribe-result').html('<p>Thank you for subscribing</p>')
                    $('#mce-EMAIL').val('')
                } else {
                    // Something went wrong, do something to notify the user.
                    console.log(data.msg)
                    $('#mce-EMAIL').css('borderColor', '#ff8282')
                    $('#subscribe-result').html('<p>' + data.msg + '</p>')
                }
                }
        });
    } else {
        $('#subscribe-result').css('color', '#FF0201')
        $('#subscribe-result').html('<p>Please agree to our T&C&rsquo;s</p>')
    }

}