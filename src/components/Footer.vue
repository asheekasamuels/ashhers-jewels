<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <footer class="footer">
    <div class="footer-content container-fluid">
      <div class="row justify-content-center">
        <div class="footer-links">
          <!-- About Us Links -->
          <div class="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/reachUs">Contact Us</a></li>
              <li><a href="/warranty-and-repairs">Warranty and Repairs</a></li>
            </ul>
          </div>

          <!-- About Global Links -->
          <div class="footer-column">
            <h4>About Ashhers Jewels Global</h4>
            <ul>
              <li><a href="/loyalty-card">Loyalty Card</a></li>
              <li><a href="/jewels-club">Jewels Club</a></li>
              <li><a href="/company-info">Company Info</a></li>
              <li><a href="/store-locator">Store Locator</a></li>
            </ul>
          </div>

          <!-- Customer Service Links -->
          <div class="footer-column">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/delivery">Delivery</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/size-guide">Size Guide</a></li>
              <li><a href="/care-instructions">Care Instructions</a></li>
              <li><a href="/promotions">Promotions</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <!-- Follow Us Links -->
          <div class="footer-column follow-us">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <p class="footer-text">
          Ashhers Jewels &copy; <span id="currentYear">{{ currentYear }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #f9e5e8; /* Light pink background */
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  margin-top: 40px;
  font-family: "Georgia", serif;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-links {
  display: flex;
  justify-content: center; /* Center the footer columns */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 100%; /* Full width */
  margin-bottom: 15px; /* Space below the links */
}

.footer-column {
  flex: 1;
  min-width: 150px; /* Minimum width for each column */
  padding: 0 10px; /* Space inside columns */
  text-align: center; /* Center text in columns */
}

.footer-column h4 {
  color: #d88f94; /* Baby pink for headings */
}

.footer-column ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0;
}

.footer-column li {
  margin: 10px 0;
}

.footer-column a {
  color: #333; /* Dark text color for links */
  text-decoration: none; /* Remove underline */
}

.footer-column a:hover {
  text-decoration: underline; /* Underline on hover */
}

.follow-us .social-icons {
  display: flex;
  justify-content: center; /* Center social icons */
  gap: 10px; /* Space between icons */
}

.follow-us .social-icons a {
  color: #333; /* Dark color for icons */
}

.follow-us .social-icons a:hover {
  color: #d88f94; /* Baby pink on hover */
}

.footer-text {
  font-size: 1.2rem;
  color: #333;
  margin-top: 15px; /* Space above footer text */
}

.footer-text span {
  font-weight: bold;
  color: #d88f94; /* Baby pink for the year */
}

/* Media Queries for responsive design */
@media (max-width: 600px) {
  .footer-links {
    flex-direction: column; /* Stack columns on small screens */
    align-items: center; /* Center items */
  }

  .footer-column {
    min-width: 100%; /* Full width for each column */
    margin-bottom: 20px; /* Space below each column */
  }

  .footer-text {
    margin-top: 20px; /* Space above footer text */
  }
}
</style>

