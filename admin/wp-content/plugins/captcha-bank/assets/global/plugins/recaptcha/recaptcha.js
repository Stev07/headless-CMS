var renderCBReCaptcha = function() {

    var ReCaptchaData = {
        'sitekey'   : CB.site_key,
        'theme'     : CB.theme,
        'type'      : CB.data_type,
        'size'      : CB.size,
    };



    for (var i = 0; i < document.forms.length; ++i) {
        var form = document.forms[i];
        var holder = form.querySelector('.cb-g-recaptcha');

        if (null === holder) continue;
        holder.innerHTML = '';

        (function(frm){

            if ( CB.captcha_key_type == 'invisible' ) {
              ReCaptchaData.size = 'invisible';
              ReCaptchaData.badge = CB.data_badge;
              ReCaptchaData.callback = function (recaptchaToken) { HTMLFormElement.prototype.submit.call(frm); };
              ReCaptchaData["expired-callback"] = function(){grecaptcha.reset(holderId);};

            }

            var holderId = grecaptcha.render(holder, ReCaptchaData );

             if ( CB.captcha_key_type == 'invisible' ) {
                frm.onsubmit = function (evt){evt.preventDefault();grecaptcha.execute(holderId);};
            }

        })(form);
    }

};
