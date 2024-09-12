<template>
    <div class="size-guide-page">
        <section class="size-guide-content">
            <h1>Jewelry Size Guide</h1>
            <p>Find the perfect fit with our comprehensive size guide for rings, bracelets, and necklaces.</p>

            <h2>Ring Sizes</h2>
            <p>Measure the circumference of your finger and refer to our ring size chart for the best fit.</p>

            <h2>Bracelet Sizes</h2>
            <p>Use a measuring tape to find the circumference of your wrist for an accurate bracelet size.</p>

            <h2>Necklace Sizes</h2>
            <p>Choose the right necklace length depending on your personal style and comfort.</p>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.size-guide-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* Light background for the page */
}

.size-guide-content {
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

  