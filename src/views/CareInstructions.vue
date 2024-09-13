<template>
    <div class="care-instructions-page">
        <section class="care-content">
            <h1>Jewelry Care Instructions</h1>
            <p>To keep your jewelry looking beautiful for years to come, follow these simple care instructions.</p>

            <h2>General Care</h2>
            <ul>
                <li>Avoid contact with chemicals like perfume and lotions.</li>
                <li>Store your jewelry in a dry place, preferably in a jewelry box.</li>
            </ul>

            <h2>Cleaning</h2>
            <p>Clean your jewelry with a soft cloth and warm soapy water. Avoid harsh chemicals.</p>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.care-instructions-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9;
}

.care-content {
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

ul {
    margin-top: 10px;
    margin-left: 20px;
}

ul li {
    margin-bottom: 10px;
}

a {
    color: #d88f94;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media (max-width: 700px) {
    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .care-content {
        padding: 20px;
    }
}

@media (max-width: 300px) {
    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.2rem;
    }
}
</style>


