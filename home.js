(function () {
  const storageKeys = [
    ['totalOrders', '18'],
    ['rewardPoints', '350'],
    ['walletBalance', '1250'],
    ['moneySaved', '2400'],
    ['tableBookings', '12'],
    ['rideTrips', '8']
  ];

  function setDemoValues() {
    storageKeys.forEach(([key, value]) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, value);
      }
    });
  }

  function initWelcomeMessage() {
    const welcomeHome = document.getElementById('welcomeHome');
    if (!welcomeHome) return;

    const userName = localStorage.getItem('name') || 'Guest';
    welcomeHome.textContent = `👋 Welcome Back, ${userName}`;
  }

  function placeOrder() {
    const totalOrders = (parseInt(localStorage.getItem('totalOrders'), 10) || 0) + 1;
    const rewardPoints = (parseInt(localStorage.getItem('rewardPoints'), 10) || 0) + 20;
    const walletBalance = (parseInt(localStorage.getItem('walletBalance'), 10) || 0) + 50;
    const moneySaved = (parseInt(localStorage.getItem('moneySaved'), 10) || 0) + 100;

    localStorage.setItem('totalOrders', String(totalOrders));
    localStorage.setItem('rewardPoints', String(rewardPoints));
    localStorage.setItem('walletBalance', String(walletBalance));
    localStorage.setItem('moneySaved', String(moneySaved));

    window.alert('✅ Order Placed Successfully!\n\n+1 Order\n+20 Reward Points\n+₹50 Wallet Cashback');
  }

  function enhanceLandingPage() {
    document.querySelectorAll('button:not([type])').forEach((button) => {
      button.setAttribute('type', 'button');
    });

    document.querySelectorAll('img').forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    const heroImage = document.querySelector('.hero img');
    if (heroImage) {
      heroImage.removeAttribute('loading');
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }

  initWelcomeMessage();
  setDemoValues();
  enhanceLandingPage();

  window.placeOrder = placeOrder;
  document.addEventListener('DOMContentLoaded', enhanceLandingPage);
})();