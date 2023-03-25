const request = require('supertest');
const app = require('../app');

describe('POST /api/calculate-price', () => {
  it('should return suggested price and total amount due', async () => {
    const requestBody = {
      gallonsRequested: 1500,
      user: {
        state: 'Texas',
        hasHistory: true
      }
    };
    const expectedResponse = {
      suggestedPrice: 1.695,
      totalAmountDue: 2542.50
    };

    const response = await request(app)
      .post('/api/calculate-price')
      .send(requestBody)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual(expectedResponse);
  });
});
