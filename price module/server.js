const express = require('express');
const path = require('path');
const PricingModule = require('./utils/PricingModule');
const app = express();
const userProfile = require('./mockData.json');

const PORT = process.env.PORT || 3000;

app.use(express.json());


// connects the back-end and front-end
// serves the front-end statically
app.use(express.static(path.join(__dirname, 'client')));

// get the users profile when page loads
app.get('/api/dashboard', (req, res) => {
  console.log(userProfile);
  res.json(userProfile);
});

app.get('/get-quote', (req, res) => {
  const { gallonsRequested, state, hasHistory } = req.query;

  const pricingModule = new PricingModule(parseInt(gallonsRequested), state, hasHistory === 'true');
  const { suggestedPrice, totalAmountDue } = pricingModule.calculatePrice();

  res.json({ suggestedPrice, totalAmountDue });
});





app.post('/api/calculate-price', (req, res) => {
  const { gallonsRequested, user } = req.body;
  console.log(user, 37)
  const currentPrice = 1.5;
  const locationFactor = user.state === 'Texas' ? 0.02 : 0.04;
  const rateHistoryFactor = user.hasHistory ? 0.01 : 0;
  const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;
  const companyProfitFactor = 0.1;
  const margin = currentPrice * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor);
  const suggestedPrice = currentPrice + margin;
  const totalAmountDue = gallonsRequested * suggestedPrice;

  console.log(suggestedPrice, totalAmountDue);
  res.json({ suggestedPrice, totalAmountDue });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});