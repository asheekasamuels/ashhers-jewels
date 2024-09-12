<template>
    <div class="returns-page">
        <section class="returns-content">
            <h1>Returns and Exchanges</h1>
            <p>If you're not completely satisfied with your purchase, we offer easy returns and exchanges.</p>

            <h2>Return Policy</h2>
            <p>You can return items within 30 days of purchase for a full refund or exchange, provided they are in original condition.</p>

            <h2>How to Return</h2>
            <ol>
                <li>Contact our customer service at <a href="mailto:returns@ashhersjewels.com">returns@ashhersjewels.com</a></li>
                <li>Package the item securely and include the original receipt</li>
                <li>Ship the package to our return address</li>
            </ol>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.returns-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* Light background for the page */
}

.returns-content {
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

ol {
    margin-top: 10px; /* Space above ordered lists */
    margin-left: 20px; /* Indentation for list items */
}

ol li {
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
