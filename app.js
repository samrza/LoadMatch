// app.js

// DOM Elements
const navSignInBtn = document.querySelector(".nav-signin-btn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close-modal");
const loginBtn = document.querySelector(".login-btn");
const getStartedBtn = document.getElementById("getStartedBtn");
const emailLoginBtn = document.getElementById("emailLoginBtn");
const otpLoginBtn = document.getElementById("otpLoginBtn");
const truckDriverBtn = document.getElementById("truckDriverBtn");
const shipperBtn = document.getElementById("shipperBtn");
const profileBtn = document.getElementById("profileBtn");
const tripHistoryBtn = document.getElementById("tripHistoryBtn");
const earningsBtn = document.getElementById("earningsBtn");

// Sections
const authSection = document.getElementById("authSection");
const userSelectionSection = document.getElementById("userSelectionSection");
const dashboardSection = document.getElementById("dashboardSection");
const profileSection = document.getElementById("profileSection");
const tripHistorySection = document.getElementById("tripHistorySection");
const earningsSection = document.getElementById("earningsSection");
const mapSection = document.getElementById("mapSection");
const vehicleDetailsSection = document.getElementById("vehicleDetailsSection");
const availableTrucksSection = document.getElementById(
  "availableTrucksSection"
);

// Show Login Modal
if (navSignInBtn) {
  navSignInBtn.addEventListener("click", () => {
    if (loginModal) {
      loginModal.classList.remove("hidden");
      // Focus on username field
      document.getElementById("username").focus();
    }
  });
}

// Get Started Button
if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    authSection.classList.remove("hidden");
    // Smooth scroll to auth section
    authSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Close Login Modal with close button
if (closeModal) {
  closeModal.addEventListener("click", () => {
    if (loginModal) {
      loginModal.classList.add("hidden");
      // Reset form
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
}

// Close modal when clicking outside
if (loginModal) {
  loginModal.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.classList.add("hidden");
      // Reset form
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
}

// Handle Login (Modal)
if (loginBtn) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username && password) {
      // Hide login modal
      if (loginModal) {
        loginModal.classList.add("hidden");
        // Reset form
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }

      // Hide auth section and show user selection
      if (authSection) {
        authSection.classList.add("hidden");
      }

      if (userSelectionSection) {
        userSelectionSection.classList.remove("hidden");
        // Smooth scroll to user selection section
        userSelectionSection.scrollIntoView({ behavior: "smooth" });
      }

      // Update nav sign in button to show logged in state
      if (navSignInBtn) {
        navSignInBtn.innerHTML = `
          <i class="fas fa-user"></i>
          ${username}
        `;
      }
    } else {
      alert("Please enter both username and password");
    }
  });
}

// Handle Email Login Button
if (emailLoginBtn) {
  emailLoginBtn.addEventListener("click", () => {
    if (loginModal) {
      loginModal.classList.remove("hidden");
    }
  });
}

// Handle OTP Login Button
if (otpLoginBtn) {
  otpLoginBtn.addEventListener("click", () => {
    if (loginModal) {
      loginModal.classList.remove("hidden");
    }
  });
}

// Handle User Selection
if (truckDriverBtn) {
  truckDriverBtn.addEventListener("click", () => {
    userSelectionSection.classList.add("hidden");
    vehicleDetailsSection.classList.remove("hidden");
  });
}

if (shipperBtn) {
  shipperBtn.addEventListener("click", () => {
    userSelectionSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
  });
}

// Handle Dashboard Navigation
if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    dashboardSection.classList.add("hidden");
    profileSection.classList.remove("hidden");
  });
}

if (earningsBtn) {
  earningsBtn.addEventListener("click", () => {
    dashboardSection.classList.add("hidden");
    earningsSection.classList.remove("hidden");
  });
}

if (tripHistoryBtn) {
  tripHistoryBtn.addEventListener("click", () => {
    dashboardSection.classList.add("hidden");
    tripHistorySection.classList.remove("hidden");
  });
}

// Handle Vehicle Details Submission
const submitDetailsBtn = document.getElementById("submitDetailsBtn");
if (submitDetailsBtn) {
  submitDetailsBtn.addEventListener("click", () => {
    vehicleDetailsSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
  });
}

// Handle Find Available Trucks Button
const findTrucksBtn = document.querySelector(".map-actions .action-btn");
if (findTrucksBtn) {
  findTrucksBtn.addEventListener("click", () => {
    availableTrucksSection.classList.remove("hidden");
  });
}

// Initialize Map
function initMap() {
  // Default location (Mumbai)
  const mumbai = { lat: 19.076, lng: 72.8777 };

  // Create map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: mumbai,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  // Add markers for pickup and drop locations
  const pickupMarker = new google.maps.Marker({
    position: { lat: 19.076, lng: 72.8777 }, // Mumbai
    map: map,
    title: "Pickup Location",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#10b981",
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: "#ffffff",
    },
  });

  const dropMarker = new google.maps.Marker({
    position: { lat: 28.7041, lng: 77.1025 }, // Delhi
    map: map,
    title: "Drop Location",
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#ef4444",
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: "#ffffff",
    },
  });

  // Add route line
  const routePath = new google.maps.Polyline({
    path: [
      { lat: 19.076, lng: 72.8777 }, // Mumbai
      { lat: 28.7041, lng: 77.1025 }, // Delhi
    ],
    geodesic: true,
    strokeColor: "#3b82f6",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  routePath.setMap(map);
}

// Initialize the map when the page loads
window.onload = function () {
  // Note: You'll need to replace 'YOUR_GOOGLE_MAPS_API_KEY' with an actual API key
  if (typeof google !== "undefined") {
    initMap();
  }
};
