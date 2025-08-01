// controllers/searchController.js

const scrapeCase = require('../utils/scrapeCase');

exports.searchCase = async (req, res) => {
    const { caseType, caseNumber, filingYear, captcha } = req.body;
    if (!caseType || !caseNumber || !filingYear || !captcha) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log(`Searching for case: ${caseType}, ${caseNumber}, ${filingYear}, Captcha: ${captcha}`);
    try {
        const result = await scrapeCase(caseType, caseNumber, filingYear, captcha);
        if (result.success) {
            res.json({ message: 'Scraping successful', data: result.result });
        } else {
            console.error(`Scraping error: ${result.error}`);
            res.status(500).json({ error: result.error });
        }
    } catch (err) {
        console.error(`Scraping error: ${result.error}`);
        res.status(500).json({ error: err.message });
    }
};
