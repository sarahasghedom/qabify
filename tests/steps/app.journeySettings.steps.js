import { Given, Then, When } from 'cucumber';
import journeySettingsScreen from '../screenobjects/journeySettings.screen';
import baseScreen from '../screenobjects/base.screen';

When(/^I'm on the journey settings screen$/, () => {
    baseScreen.checkText('choose your journey settings');
    baseScreen.checkText('pick up point');
    baseScreen.checkText('drop off point');
});

Then(/^I select the pick up point "([^"]*)?"$/, place => {
    journeySettingsScreen.pickUpPoint.waitForDisplayed();
    journeySettingsScreen.pickUpPoint.click();
    journeySettingsScreen.selectPickUpOrDropOffPoint(place);
});

Then(/^I select the drop off point "([^"]*)?"$/, place => {
    journeySettingsScreen.dropOffPoint.waitForDisplayed();
    journeySettingsScreen.dropOffPoint.click();
    journeySettingsScreen.selectPickUpOrDropOffPoint(place);
});

Then(/^I select the car type "([^"]*)?"$/, type => {
    journeySettingsScreen.selectCarType(type);
});

Then(/^the estimated price can be calculated$/, () => {
    journeySettingsScreen.estimatePriceButton.click();
    expect(journeySettingsScreen.estimatedPriceText.getText()).to.not.be.null;
});

Then(/^the estimated price button is clicked$/, () => {
    journeySettingsScreen.estimatePriceButton.click();
});

Then(/^the car can be requested$/, () => {
    journeySettingsScreen.requestCarButton.click();
    baseScreen.checkText('past journeys');
});

Then(/^the past journeys list contains "([^"]*)?" and "([^"]*)?"$/, (pickup, dropoff) => {
    baseScreen.checkText(pickup);
    baseScreen.checkText(dropoff);
});
