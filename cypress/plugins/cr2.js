var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonDir: 'cypress/cucumber-json',
        output: 'cypress/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.0.1",
            "Test Environment": "LOCAL",
            "Browser": "Electron",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };
 
    reporter.generate(options);
