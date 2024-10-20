import { loadHomePage } from './pages/home';
import { loadDashboardPage } from './pages/dashboard';

document.addEventListener('DOMContentLoaded', () => {
  // Load the home page by default when the document is loaded
  loadHomePage();

  // Add event listeners for navigation links
  const homeLink = document.getElementById('home-link');
  const dashboardLink = document.getElementById('dashboard-link');

  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      loadHomePage();
    });
  }

  if (dashboardLink) {
    dashboardLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      loadDashboardPage();
    });
  }
});
