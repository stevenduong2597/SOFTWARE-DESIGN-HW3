class PricingModule {
    constructor(gallonsRequested, state, hasHistory) {
      this.gallonsRequested = gallonsRequested;
      this.state = state;
      this.hasHistory = hasHistory;
      this.currentPrice = 1.50;
      this.locationFactor = (state === 'Texas') ? 0.02 : 0.04;
      this.rateHistoryFactor = hasHistory ? 0.01 : 0;
      this.gallonsRequestedFactor = (gallonsRequested > 1000) ? 0.02 : 0.03;
      this.companyProfitFactor = 0.1;
    }

    calculatePrice() {
      const margin = this.currentPrice * (this.locationFactor - this.rateHistoryFactor + this.gallonsRequestedFactor + this.companyProfitFactor);
      const suggestedPrice = this.currentPrice + margin;
      const totalAmountDue = this.gallonsRequested * suggestedPrice;
      return { suggestedPrice, totalAmountDue };
    }
  }

  module.exports = PricingModule;