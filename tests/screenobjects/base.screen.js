const selectors = {
    text: '//android.widget.TextView'
};

class BaseScreen {
    get text() { return $$(selectors.text);}

    //function to open the app
    open(){
        driver.launchApp();
    }

    //function to close the app
    close() {
        driver.closeApp();
    }

    //function that finds text on page and asserts the text
    findTitle(title){
        for(let i = 0; i < this.text.length; i++){
            if(this.text[i].getText().toLowerCase() === title) {
                expect(this.text[i].getText().toLowerCase()).to.contains(title);
                break;
            }
        }
    }
}

export default new BaseScreen();
