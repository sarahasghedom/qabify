const selectors = {
    captchaText: '//android.widget.TextView',
    captchaCode: '//android.widget.TextView[@resource-id="com.cabify.qabify:id/captcha_text"]',
    nextButton: '//android.widget.Button[@text="NEXT"]',
    insertCaptcha: '//android.widget.EditText[@resource-id="com.cabify.qabify:id/captcha_text"]'
};

class CaptchaScreen {
    get captchaText() { return $$(selectors.captchaText);}
    get captchaCode() { return $(selectors.captchaCode);}
    get nextButton() { return $(selectors.nextButton);}
    get insertCaptcha() {return $(selectors.insertCaptcha);}

    storeCaptchaCode() {
        let storeCaptcha = [this.captchaCode.getText()];
        return storeCaptcha;
    }
}

export default new CaptchaScreen();
