import axios from 'axios';

export function loadHomePage(): void {
  const content = document.getElementById('app-content');
  if (content) {
    // Set initial content with placeholder for both BTC and ETH
    content.innerHTML = `
      <h2>Welcome to the Trading Dashboard</h2>
    `;

    // Attach event listener to button
    const button = document.getElementById('load-prices-button');
    if (button) {
      button.addEventListener('click', togglePrices);
    }
  }
}

// Function to toggle between showing the prices and the placeholder for both BTC and ETH
function togglePrices(): void {
  const btcPriceDiv = document.getElementById('btc-price');
  const ethPriceDiv = document.getElementById('eth-price');

  if (btcPriceDiv && ethPriceDiv) {
    if (btcPriceDiv.textContent === 'Bitcoin Price: N/A' && ethPriceDiv.textContent === 'Ethereum Price: N/A') {
      // If the placeholder is shown, fetch the actual prices
      loadBTCPrice();
      loadETHPrice();
    } else {
      // If the actual prices are 
