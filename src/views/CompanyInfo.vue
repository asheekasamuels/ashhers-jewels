<template>
  <div class="company-info-page">
    <section class="company-content">
      <h1>About Ashhers Jewels</h1>
      <p>
        At Ashhers Jewels, we specialize in creating timeless pieces of jewelry
        with a modern touch. Our commitment is to bring beauty and elegance to
        every piece we craft.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to make every customer feel unique by providing high-quality
        jewelry that tells their story.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>Quality craftsmanship</li>
        <li>Customer satisfaction</li>
        <li>Sustainability</li>
      </ul>

      <h2>Contact Us</h2>
      <p>Email: support@ashhersjewels.com</p>
      <p>Phone: +123-456-7890</p>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.company-info-page {
  padding: 60px 20px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  background-color: #f9f9f9; /* Light background for the page */
  /* justify-content: center; */

}

.company-content {
  max-width: 800px;
  margin: 0 auto;
  background-color: white; /* White background for content */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  /* justify-content: center; */

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
  justify-content: center;
}

ul li {
  margin-bottom: 10px; /* Space between list items */
  /* justify-content: center; */
}


a {
  color: #d88f94; /* Baby pink for links */
  text-decoration: none; /* No underline */
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

  