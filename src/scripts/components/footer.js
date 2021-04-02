import { component } from 'picoapp'
import $ from "jquery";

export default component((node, ctx) => {
    document.getElementById('mc-embedded-subscribe').addEventListener('click', function (event) {
        event.preventDefault();
        register()
    });

    document.getElementById('gdpr_42342').addEventListener('click', function (event) {  
        if(document.getElementById('gdpr_42342').checked) {
            document.getElementById('subscribe-result').innerHTML = "";
        }
    });
    
    function register(){
        var result = document.getElementById('subscribe-result');
        var emailField = document.getElementById('mce-EMAIL');
        if(document.getElementById('gdpr_42342').checked){
            $.ajax({
                type: $('#mc-embedded-subscribe-form').attr('method'),
                url: $('#mc-embedded-subscribe-form').attr('action'),
                data: $('#mc-embedded-subscribe-form').serialize(),
                cache: false,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                error: function (err) { alert('Could not connect. Please try again later.') },
                success: function (data) {
                if (data.result === 'success') {
                    emailField.style.borderColor = '#000000';
                    result.innerHTML = '<p>Thank you for subscribing</p>';
                    emailField.value = '';
                } else {
                    emailField.style.borderColor = '#ff8282';
                    result.innerHTML = '<p>' + data.msg + '</p>';
                }
                }
            });
        } else {
            result.style.color = '#FF0201';
            result.innerHTML = '<p>Please agree to our T&C&rsquo;s</p>';
        }
    }

 return node => {

  }
})
