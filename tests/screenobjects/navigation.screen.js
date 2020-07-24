import baseScreen from './base.screen';

const selectors = {
    home: '~Home',
    webView: '~WebView',
    login: '~Login',
    forms: '~Forms',
    swipe: '~Swipe',
};

class NavigationScreen {
    get homeButton() { return $(selectors.home);}
    get webViewButton() { return $(selectors.webView);}
    get loginButton() { return $(selectors.login);}
    get formsButton() { return $(selectors.forms);}
    get swipeButton() { return $(selectors.swipe);}

    //function to find menu and click ont it
    findMenuButtons(menu){
        for(let i = 0; i < baseScreen.text.length; i++){
            if(baseScreen.text[i].getText().toLowerCase() === menu) {
                baseScreen.text[i].click();
                break;
            }
        }
    }
}

export default new NavigationScreen();
