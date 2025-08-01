const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function scrapeCase(caseType, caseNumber, filingYear, captchaValue) {
    let driver;
    try {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://delhihighcourt.nic.in/app/case-number');

        await driver.findElement(By.id('case_type')).sendKeys(caseType);
        await driver.findElement(By.name('case_number')).sendKeys(caseNumber);
        await driver.findElement(By.id('year')).sendKeys(filingYear);
        await driver.findElement(By.id("captchaInput")).sendKeys(captchaValue);

        // Wait for the button to be clickable
        const submitButton = await driver.wait(until.elementLocated(By.id("search")), 10000);
        await driver.wait(until.elementIsVisible(submitButton), 10000);
        await driver.wait(until.elementIsEnabled(submitButton), 10000);

        // Scroll the button into view
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitButton);

        // Add a small delay
        await driver.sleep(1000);

        // Try to click using JavaScript
        await driver.executeScript("arguments[0].click();", submitButton);

        // If JavaScript click doesn't work, try the regular click
        try {
            await submitButton.click();
        } catch (clickError) {
            console.log("JavaScript click failed, trying regular click");
        }

        await driver.wait(until.elementLocated(By.css('.table-responsive.mt-4')), 10000);

        const tableWrapper = await driver.findElement(By.id('s_judgeTable_wrapper'));
        const resultHtml = await tableWrapper.getAttribute('outerHTML');

        return { success: true, result: resultHtml };
    } catch (err) {
        console.error('Scraping error:', err);
        return { success: false, error: err.message };
    } finally {
        if (driver) await driver.quit();
    }
}

module.exports = scrapeCase;