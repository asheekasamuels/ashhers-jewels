<template>
  <div class="loyalty-card-page">
    <section class="loyalty-content">
      <h1>Loyalty Card Program</h1>
      <p>
        Join our exclusive Loyalty Card program and enjoy fantastic rewards and
        benefits.
      </p>

      <h2>How It Works</h2>
      <p>
        Earn points with every purchase and redeem them for discounts or
        special offers.
      </p>

      <h2>Rewards</h2>
      <ul>
        <li>10 points = R1 discount</li>
        <li>Exclusive access to new collections</li>
        <li>Early access to sales and promotions</li>
      </ul>

      <h2>Sign Up Today!</h2>
      <p>
        Sign up to our loyalty program and start earning points on your next
        purchase.
      </p>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loyalty-card-page {
  padding: 60px 20px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  background-color: #f9f9f9; /* Light background for the page */
}

.loyalty-content {
  max-width: 800px;
  margin: 0 auto;
  background-color: white; /* White background for content */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

h1,
h2 {
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
  color: #d88f94; /* Baby pink for links */
  text-decoration: none; /* No underline */
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

  