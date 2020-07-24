
## Needed software

- Install Java JDK(https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- Install Node.js & NPM (https://nodejs.org/en/)
- Install Git (https://git-scm.com/download/win)
- Install Visual Studio Code(https://code.visualstudio.com/)
- Install appium(http://appium.io/docs/en/about-appium/getting-started/). 
- Install android studio(https://developer.android.com/studio/install) and make sure to setup an emulator.
- After setting up an emulator specify the name of the emulator in the ```wdio.android.app.conf.js``` file

#### Clone the project, run one of the following commands

```
git clone git@github.com:sarahasghedom/webdriverio-appium.git #SSH
git clone https://github.com/sarahasghedom/webdriverio-appium.git #HTTPS
```

#### Install the dependencies.

```
npm install
```
#### Run the test
````
npm run android.app
````
