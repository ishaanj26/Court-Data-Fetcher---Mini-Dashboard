// controllers/searchController.js

exports.searchCase = (req, res) => {
  const { caseType, caseNumber, filingYear } = req.body;
  if (!caseType || !caseNumber || !filingYear) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  console.log(`Searching for case: ${caseType}, ${caseNumber}, ${filingYear}`);
  // For now, just echo back the data. Later, connect to DB.
  res.json({
    message: 'Search received',
    data: { caseType, caseNumber, filingYear }
  });
};
