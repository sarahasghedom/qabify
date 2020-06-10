import NativeAlert from '../helpers/nativeAlert';

const selectors = {
    text: '//android.widget.TextView',
    textField: '//android.widget.EditText',
};

class BaseScreen {
    get displayedText() { return $(selectors.text);}
    get allDisplayedText() { return $$(selectors.text);}

    checkText(text){
        for(let i = 0; i < this.allDisplayedText.length; i++){
            if(this.allDisplayedText[i].getText().toLowerCase().indexOf(text)) {
                break;
            }
        }
    }

    get alert () {
        return NativeAlert;
    }
}

export default new BaseScreen();