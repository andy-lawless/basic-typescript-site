import axios from 'axios';

export function loadDashboardPage(): void {
  // Load dashboard content
  const content = document.getElementById('app-content');
  if (content) {
    content.innerHTML = `
      <h2>Dashboard</h2>
      <div class="grid--wrapper">
            <button class="js-button" id="load-prices-button">Load Prices</button>
        <div class="grid">
          <div class="item" id="btc-price">Bitcoin Price</div>
          <div class="item" id="eth-price">Ethereum Price</div>
        </div>
      </div>
    `;

    // Attach event listener to the button after the content is loaded
    const button = document.getElementById('load-prices-button');
    if (button) {
      button.addEventListener('click', () => {
        loadPrices();
      });
    }

    // Attach event listener to toggle the grid class
    const toggleButton = document.querySelector('button');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.querySelector('.grid')?.classList.toggle('grid--full');
      });
    }
  }
}

function loadPrices(): void {
  // Fetch and update Bitcoin price
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => {
      const price = response.data.bitcoin.usd;
      const priceDiv = document.getElementById('btc-price');
      if (priceDiv) {
        priceDiv.innerHTML = `Bitcoin Price: $${price}`;
      }
    })
    .catch(error => {
      console.error('Error fetching BTC price:', error);
    });

  // Fetch and update Ethereum price
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => {
      const price = response.data.ethereum.usd;
      const priceDiv = document.getElementById('eth-price');
      if (priceDiv) {
        priceDiv.innerHTML = `Ethereum Price: $${price}`;
      }
    })
    .catch(error => {
      console.error('Error fetching ETH price:', error);
    });
}
