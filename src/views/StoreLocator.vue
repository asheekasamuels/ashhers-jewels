<template>
    <div class="store-locator-page">
        <section class="store-locator-content">
            <h1>Find an Ashhers Jewels Store Near You</h1>
            <p>Enter your city or zip code to find the nearest store and shop your favorite pieces in person.</p>

            <h2>Our Store Locations</h2>
            <ul>
                <li>Cape Town: 314 Imam Haron, Lansdowne, 067 623 5929</li>
                <li>Durban: 85 Fourth Avenue, Lizzo, 067 199 0119</li>
                <li>Port Elizabeth: 114 Mark Jacobs, Retreat, 061 999 7873</li>
            </ul>
        </section>
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1694259988434!5m2!1sen!2sza"
                width="100%"
                height="300"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.store-locator-page {
    padding: 60px 20px;
    font-family: "Georgia", serif;
    line-height: 1.6;
    background-color: #f9f9f9;
}

.store-locator-content {
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

.map {
    margin-top: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Media Queries for Responsiveness */
@media (max-width: 700px) {
    .store-locator-page {
        padding: 40px 15px;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }

    .store-locator-content {
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

    p {
        font-size: 0.8rem;
    }

    .store-locator-content {
        padding: 15px;
    }
}
</style>

