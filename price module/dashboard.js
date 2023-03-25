const addressInput = document.getElementById('address');
const gallonsInput = document.getElementById('gallons');
const submitInput = document.getElementById('submit');
const pricePerGallonInput = document.getElementById('pricePerGallon');
const totalAmountDueInput = document.getElementById('totalAmountDue');

let user;


const getDashboardData = () => {
  fetch('/api/dashboard')
    .then(res => res.json())
    .then(userData => {
      user = userData;
      addressInput.value = userData.state;
    });
};

submitInput.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('/api/calculate-price', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user,
      gallonsRequested: gallonsInput.value,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      pricePerGallonInput.value = data.suggestedPrice;
      totalAmountDueInput.value = data.totalAmountDue;
    });
});


getDashboardData();