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
        <img src="https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg" loading="lazy" alt="Asheeka Samuels" class="founder-photo"
        />
        <div class="founder-info">
          <h3>Asheeka Samuels</h3>
          <p>
            Asheeka Samuels is the visionary behind Ashhers Jewels. With an
            extensive background in jewelry design and a passion for exceptional
            craftsmanship, Asheeka has meticulously curated each
            collection to reflect elegance and individuality. She
            brings a deep understanding of design aesthetics and a commitment to
            creating timeless pieces that resonate with our customers.
          </p>
          <p>
            Driven by a love for beautiful things and a dedication to quality,
            Asheeka aims to make Ashhers Jewels a symbol of
            elegance and a go-to destination for those who appreciate the finer
            things in life.
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
  color: #000;
}

.about-banner {
  background-color: #f9e5e8; /* Baby pink */
  text-align: center;
  padding: 40px 20px;
  color: #000;
}

.about-banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.about-banner p {
  font-size: 18px;
}

.story {
  margin: 40px 0;
  padding: 0 20px;
  color: #333;
}

.founders {
  margin: 40px 0;
  padding: 0 20px;
  background-color: #f9e5e8;
  border-top: 3px solid #c0c0c0; 
}

.founder-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.founder-photo {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #c0c0c0; 
}

.founder-info {
  max-width: 600px;
  margin: 0 auto;
}

.founder-info h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #000;
  border-bottom: 2px solid #c0c0c0;
  padding-bottom: 5px;
}

.founder-info p {
  font-size: 1em;
  color: #333;
}
</style>
