const selectors = {
    pickUpPoint: '//android.widget.Spinner[@resource-id="com.cabify.qabify:id/pick_up_point"]',
    dropOffPoint: '//android.widget.Spinner[@resource-id="com.cabify.qabify:id/drop_off_point"]',
    firstLocation: '//android.widget.TextView[@text="Atocha"]',
    secondLocation: '//android.widget.TextView[@text="Aeropuerto Madrid Barajas, T4"]',
    thirdLocation: '//android.widget.TextView[@text="Calle Pradillo, 42"]',
    fourthLocation: '//android.widget.TextView[@text="Calle Mejía Lequerica, 14"]',
    liteCheckBox: '//android.widget.CheckBox[@text="Lite"]',
    executiveBox: '//android.widget.CheckBox[@text="Executive"]',
    estimatedPriceText: '//android.widget.TextView[@resource-id="com.cabify.qabify:id/price_text"]',
    estimatePriceButton: '//android.widget.Button[@text="ESTIMATE"]',
    requestCarButton: '//android.widget.Button[@text="REQUEST CAR"]',
};

class JourneySettingsScreen {
    get pickUpPoint() { return $(selectors.pickUpPoint);}
    get dropOffPoint() { return $(selectors.dropOffPoint);}
    get firstLocation() { return $(selectors.firstLocation);}
    get secondLocation() { return $(selectors.secondLocation);}
    get thirdLocation() { return $(selectors.thirdLocation);}
    get fourthLocation() { return $(selectors.fourthLocation);}
    get liteCheckBox() { return $(selectors.liteCheckBox);}
    get executiveCheckBox() { return $(selectors.executiveBox);}
    get estimatedPriceText() { return $(selectors.estimatedPriceText);}
    get estimatePriceButton() { return $(selectors.estimatePriceButton);}
    get requestCarButton(){ return $(selectors.requestCarButton);}

    selectPickUpOrDropOffPoint(place) {
        switch(place){
            case 'atocha':
                this.firstLocation.click();
                break;
            case 'aeropuerto':
                this.secondLocation.click();
                break;
            case 'pradillo':
                this.thirdLocation.click();
                break;
            case 'mejía':
                this.fourthLocation.click();
                break;
        }
    }

    selectCarType(type) {
        let isLiteChecked = this.liteCheckBox.getAttribute('checked');
        let isExecutiveChecked = this.executiveCheckBox.getAttribute('checked');

        switch (type) {
            case 'lite':
                if(isLiteChecked === 'true'){
                    console.log('already selected');
                } else{
                    this.liteCheckBox.click();
                }
                break;
            case 'executive':
                if( isExecutiveChecked === 'true'){
                    console.log('already selected');
                } else{
                    this.executiveCheckBox.click();
                }
                break;
        }
    }

}

export default new JourneySettingsScreen();
