<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <footer class="footer">
    <div class="footer-content container-fluid">
      <div class="row justify-content-center">
        <div class="footer-links">
          <div class="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/reachUs">Contact Us</a></li>
              <li><a href="/warranty-and-repairs">Warranty and Repairs</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>About Ashhers Jewels Global</h4>
            <ul>
              <li><a href="/loyalty-card">Loyalty Card</a></li>
              <li><a href="/jewels-club">Jewels Club</a></li>
              <li><a href="/company-info">Company Info</a></li>
              <li><a href="/store-locator">Store Locator</a></li>
            </ul>
          </div>

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
  background-color: #f9e5e8;
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
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
}

.footer-column {
  flex: 1;
  min-width: 150px;
  padding: 0 10px;
  text-align: center;
}

.footer-column h4 {
  color: #d88f94;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column li {
  margin: 10px 0;
}

.footer-column a {
  color: #333;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

.follow-us .social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.follow-us .social-icons a {
  color: #333;
}

.follow-us .social-icons a:hover {
  color: #d88f94;
}

.footer-text {
  font-size: 1.2rem;
  color: #333;
  margin-top: 15px;
}

.footer-text span {
  font-weight: bold;
  color: #d88f94;
}

@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    min-width: 100%;
    margin-bottom: 20px;
  }

  .footer-text {
    margin-top: 20px;
  }
}
</style>
