<template>
  <div class="delivery-page">
      <section class="delivery-content">
          <h1>Delivery Information</h1>
          <p>We offer reliable shipping options to ensure your jewelry arrives safely and on time.</p>

          <h2>Shipping Options</h2>
          <ul>
              <li>Standard Delivery: 3-5 business days</li>
              <li>Express Delivery: 1-2 business days</li>
          </ul>

          <h2>Shipping Costs</h2>
          <p>Shipping costs vary based on location and delivery method. Check at checkout for the latest rates.</p>

          <h2>International Shipping</h2>
          <p>We ship worldwide. Additional taxes and duties may apply for international orders.</p>
      </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.delivery-page {
  padding: 60px 20px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  background-color: #f9f9f9; /* Light background for the page */
}

.delivery-content {
  max-width: 800px;
  margin: 0 auto;
  background-color: white; /* White background for content */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

h1, h2 {
  color: #d88f94; /* Baby pink heading color */
}

h1 {
  font-size: 2.5rem; /* Larger font size for main title */
  margin-bottom: 20px; /* Space below the title */
}

h2 {
  font-size: 1.8rem; /* Subtitle font size */
  margin-top: 30px; /* Space above each section */
}

p {
  color: #333; /* Dark grey for text */
}

ul {
  margin-top: 10px; /* Space above lists */
  margin-left: 20px; /* Indentation for list items */
}

ul li {
  margin-bottom: 10px; /* Space between list items */
}

a {
  color: #d88f94; /* Baby pink for links, if needed */
  text-decoration: none; /* No underline */
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

  