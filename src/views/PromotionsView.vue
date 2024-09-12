<template>
    <div class="promotions-page">
        <section class="promotions-content">
            <h1>Current Promotions</h1>
            <p>Explore our latest promotions and special offers exclusively for Ashhers Jewels customers.</p>

            <h2>Exclusive Offers</h2>
            <ul>
                <li>Buy one, get one 50% off</li>
                <li>20% off on select items</li>
                <li>Free shipping on orders over R100</li>
            </ul>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.promotions-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* Light background for the page */
}

.promotions-content {
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

  