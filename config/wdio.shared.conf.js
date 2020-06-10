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
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    specs: ['tests/features/**/*.feature'],
    reporters: ['spec'],
    cucumberOpts: {
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

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        // If you need a logs from appium server, make log equal true.
        log: false,
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },

    port: 4723
};
