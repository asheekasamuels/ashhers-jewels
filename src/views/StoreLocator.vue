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
    background-color: #f9f9f9; /* Light background for the page */
}

.store-locator-content {
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

.map {
    margin-top: 30px; /* Space above the map */
    border-radius: 8px;
    overflow: hidden; /* Prevents overflow from iframe */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
</style>

  