import { Given, When, Then } from 'cucumber';
import captchaScreen from '../screenobjects/captcha.screen';

Then(/^the app shows a captcha code$/, () => {
    captchaScreen.captchaCode.waitForDisplayed();
    expect(captchaScreen.captchaText[0].getText().toLowerCase()).to.contains('remember this code for requesting a taxi');
});

Then(/^continue to the journey settings screen$/, () => {
    captchaScreen.nextButton.click();
});

Then(/^the captcha code is stored and entered$/, () => {
    let code = captchaScreen.storeCaptchaCode();
    captchaScreen.captchaCode.waitForDisplayed();
    expect(captchaScreen.captchaText[0].getText().toLowerCase()).to.contains('remember this code for requesting a taxi');
    captchaScreen.nextButton.click();
    captchaScreen.insertCaptcha.setValue(code);
});