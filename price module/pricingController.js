// pricingController.js

const PricingModule = require('../utils/PricingModule');

// This route handles the GET request to retrieve a pricing quote
app.get('/get-quote', (req, res) => {
  const { gallonsRequested, state, hasHistory } = req.query;

  const pricingModule = new PricingModule(parseInt(gallonsRequested), state, hasHistory === 'true');
  const { suggestedPrice, totalAmountDue } = pricingModule.calculatePrice();

  res.json({ suggestedPrice, totalAmountDue });
});
