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
    background-color: #f9f9f9;
}

.returns-content {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #d88f94;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.8rem;
    margin-top: 30px;
}

p {
    color: #333;
}

ol {
    margin-top: 10px;
    margin-left: 20px;
}

ol li {
    margin-bottom: 10px;
}

a {
    color: #d88f94;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Media Queries for Responsiveness */
@media (max-width: 700px) {
    .returns-page {
        padding: 30px 15px;
    }

    .returns-content {
        padding: 30px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }

    ol li {
        font-size: 1rem;
    }
}

@media (max-width: 300px) {
    .returns-page {
        padding: 20px 10px;
    }

    .returns-content {
        padding: 15px;
    }

    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    p,
    ol li {
        font-size: 0.9rem;
    }
}
</style>
