const { join } = require('path');
exports.config = {
    before: function() {
        const chai = require('chai');
        global.expect = chai.expect;
    },

    // ====================
    // Runner and framework configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'info',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 6000,
    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,
    specs: ['tests/features/**/navigation.feature'],
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./tests/steps/**/app*.steps.js'],
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 10000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },
    capabilities: [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'emulator-5554',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp.apk'),
            'appium:noReset': false,
            'appium:newCommandTimeout': 60,
        },
    ],

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        log: false,
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },
    port: 4723
};
