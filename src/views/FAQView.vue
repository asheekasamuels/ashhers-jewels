<template>
    <div class="faq-page">
        <section class="faq-content">
            <h1>Frequently Asked Questions</h1>

            <h2>1. What is your return policy?</h2>
            <p>You can return items within 30 days of purchase for a full refund, provided they are in original condition.</p>

            <h2>2. How long does delivery take?</h2>
            <p>Standard delivery takes 3-5 business days, and express delivery takes 1-2 business days.</p>

            <h2>3. Do you offer international shipping?</h2>
            <p>Yes, we ship worldwide. Additional taxes and duties may apply for international orders.</p>

            <h2>4. How do I care for my jewelry?</h2>
            <p>Avoid exposing your jewelry to chemicals, and clean it with a soft cloth and warm water.</p>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.faq-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* Light background for the page */
}

.faq-content {
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
    margin-top: 30px; /* Space above each question */
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
  