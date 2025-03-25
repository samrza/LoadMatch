// app.js

// Elements
const emailLoginBtn = document.getElementById('emailLoginBtn');
const otpLoginBtn = document.getElementById('otpLoginBtn');
const truckDriverBtn = document.getElementById('truckDriverBtn');
const shipperBtn = document.getElementById('shipperBtn');
const profileBtn = document.getElementById('profileBtn');
const tripHistoryBtn = document.getElementById('tripHistoryBtn');
const earningsBtn = document.getElementById('earningsBtn');

// Display Sections
const authSection = document.getElementById('authSection');
const userSelectionSection = document.getElementById('userSelectionSection');
const dashboardSection = document.getElementById('dashboardSection');
const profileSection = document.getElementById('profileSection');
const tripHistorySection = document.getElementById('tripHistorySection');
const earningsSection = document.getElementById('earningsSection');
const mapSection = document.getElementById('mapSection');

// Authentication Simulation
emailLoginBtn.addEventListener('click', () => {
    alert('Email login selected');
    showUserSelection();
});

otpLoginBtn.addEventListener('click', () => {
    alert('OTP login selected');
    showUserSelection();
});

// Show User Selection Screen
function showUserSelection() {
    authSection.classList.add('hidden');
    userSelectionSection.classList.remove('hidden');
}

// User Type Selection
truckDriverBtn.addEventListener('click', () => {
    showDashboard('truckDriver');
});

shipperBtn.addEventListener('click', () => {
    showDashboard('shipper');
});

// Show Dashboard
function showDashboard(userType) {
    userSelectionSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    if (userType === 'truckDriver') {
        document.getElementById('availableLoads').innerText = 'Loads Available for Truck Drivers';
        document.getElementById('availableTrucks').innerText = 'Trucks Available for Shippers';
    }
}

// Profile Button
profileBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    profileSection.classList.remove('hidden');
});

// Earnings Button
earningsBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    earningsSection.classList.remove('hidden');
});

// Trip History Button
tripHistoryBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    tripHistorySection.classList.remove('hidden');
});

// Initialize Map (Mock for now)
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York)
        zoom: 12,
    });
}

// Initialize Map
initMap();
