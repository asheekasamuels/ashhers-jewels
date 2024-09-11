<template>
  <div class="about-page">
    <div class="about-banner">
      <h1>About Us</h1>
      <p>Welcome to Ashhers Jewels, where sophistication meets artistry in every piece.</p>
    </div>

    <section class="story">
      <h2>Our Story</h2>
      <p>
        At Ashhers Jewels, we are dedicated to creating exquisite jewelry that
        transcends time. Our journey began with a simple yet profound vision: to
        offer jewelry that captures both the essence of elegance and the spirit
        of individuality. Inspired by timeless designs and contemporary trends,
        we strive to craft pieces that not only adorn but also empower.
      </p>
      <p>
        Our commitment to quality and craftsmanship drives us to select the
        finest materials and employ skilled artisans who breathe life into our
        designs. Whether it's a sparkling charm, a delicate necklace, or a
        statement ring, each piece is a testament to our dedication to beauty
        and excellence.
      </p>
      <p>
        Ashhers Jewels is more than a name; it's a promise of luxury,
        craftsmanship, and style. Join us in celebrating life's precious moments
        with jewelry that tells your unique story.
      </p>
    </section>

    <section class="founders">
      <h2>Meet the Founder</h2>
      <div class="founder-profile">
        <img
          src="https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg"
          loading="lazy"
          alt="Asheeka Samuels"
          class="founder-photo"
        />
        <div class="founder-info">
          <h3>Asheeka Samuels</h3>
          <p>
            Asheeka Samuels is the visionary behind Ashhers Jewels. With an
            extensive background in jewelry design and a passion for exceptional
            craftsmanship, Asheeka has meticulously curated each
            collection to reflect elegance and individuality. She brings a deep
            understanding of design aesthetics and a commitment to creating
            timeless pieces that resonate with our customers.
          </p>
          <p>
            Driven by a love for beautiful things and a dedication to quality,
            Asheeka aims to make Ashhers Jewels a symbol of elegance and a
            go-to destination for those who appreciate the finer things in life.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.about-banner {
  background-color: #f9e5e8; /* Light pink background */
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.about-banner h1 {
  color: #d88f94; /* Baby pink color */
  font-size: 2.5rem;
}

.about-banner p {
  color: #555; /* Darker gray for readability */
}

.story, .founders {
  margin-top: 30px;
}

.story h2, .founders h2 {
  color: #d88f94; /* Baby pink for section headers */
  font-size: 2rem;
  margin-bottom: 15px;
}

.story p, .founder-info p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.founder-profile {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}

.founder-photo {
  border-radius: 50%; /* Circular image */
  width: 120px;
  height: 120px;
  object-fit: cover; /* Maintain aspect ratio */
  margin-right: 20px; /* Space between image and text */
}

.founder-info h3 {
  margin: 0;
  color: #333; /* Darker text color for founder's name */
}

.founder-info {
  flex: 1; /* Take up remaining space */
}
</style>
