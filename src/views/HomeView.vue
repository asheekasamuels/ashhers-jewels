<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <div class="overlay"></div>
        <h1>Ashhers Jewels</h1>
        <p>
          Discover our latest collections and find the perfect piece that tells
          your unique story.
        </p>
        <a href="/products" class="cta-button">Shop Now</a>
      </div>
    </section>

    <section class="product-categories">
      <h2>Discover a World of Jewellery</h2>
      <div class="carousel-container">
        <button @click="prevSlide" class="carousel-control prev">‹</button>
        <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
          <div class="category" v-for="(category, index) in categories" :key="index">
            <img :src="category.image" :alt="category.name" class="category-image" />
          </div>
        </div>
        <button @click="nextSlide" class="carousel-control next">›</button>
      </div>
    </section>

    <section class="promo-section">
      <div class="promo-item">
        <h3>Register to Ashhers Jewels Club</h3>
        <p>Become a club member and enjoy exclusive offers and promotions. Get 10% off your first purchase!</p>
        <a href="/signup" class="promo-link">JOIN NOW</a>
      </div>
      <div class="promo-item">
        <h3>Explore Our Latest Collections</h3>
        <p>Discover new arrivals that perfectly blend elegance and sophistication. Find your next statement piece.</p>
        <a href="/products" class="promo-link">SHOP NOW</a>
      </div>
      <div class="promo-item">
        <h3>Exclusive Jewellery Range</h3>
        <p>Store our most cherished pieces in your luxurious jewellery. Keep your treasures safe and stylish.</p>
        <a href="/products" class="promo-link">SHOP NOW</a>
      </div>
    </section>

    <section class="newsletter-section">
      <h3>Stay in the Loop</h3>
      <p>Be the first to hear about new arrivals, exclusive promotions, and special events.</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email address" class="newsletter-input" />
        <button type="submit" class="newsletter-submit">Subscribe</button>
      </form>
    </section>

    <section class="navigation-links">
      <a href="/about" class="link-button">About Us</a>
      <a href="/products" class="link-button">All Products</a>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = [
  {
    name: "Bracelets",
    image: "https://www.pandorashop.co.za/media/catalog/product/l/o/low_590041c02_abc123_model_ecom_02_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Rings",
    image: "https://www.pandorashop.co.za/media/catalog/product/m/e/medium_q324_e_pdp_model_single_04_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Necklaces",
    image: "https://www.pandorashop.co.za/media/catalog/product/l/o/low_392542c01_v2_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Earrings",
    image: "https://www.pandorashop.co.za/media/catalog/product/l/o/low_292549c01_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Necklaces",
    image: "https://www.pandorashop.co.za/media/catalog/product/m/e/medium_q224_d_pdp_model_styled_38_1x1_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Rings",
    image: "https://www.pandorashop.co.za/media/catalog/product/q/2/q224_d_pdp_product_styled_37_1x1_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Earrings",
    image: "https://www.pandorashop.co.za/media/catalog/product/l/o/low_292407c01_abc123_model_ecom_01_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Bracelets",
    image: "https://www.pandorashop.co.za/media/catalog/product/5/9/592645c01_abc123_model_ecom_02_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
  {
    name: "Rings",
    image: "https://www.pandorashop.co.za/media/catalog/product/m/e/medium_q124_b_pdp_model_single_07_1x1_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
  },
];

const currentSlide = ref(0);
const totalSlides = Math.ceil(categories.length / 2); 

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('file:///C:/Users/Student/Downloads/hero1.webp'); 
  background-size: cover;
  background-position: center; 
}

.hero-content {
  color: black;
  text-align: center;
  position: relative; 
  z-index: 1; 
}

.hero-content h1 {
  font-family: "Georgia", serif;
  font-size: 3rem;
  font-weight: bold;
  color: #d88f94; 
  margin-bottom: 20px;
}

.hero-content p {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #d88f94; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
}

.carousel-container {
  position: relative;
  width: 70%; 
  overflow: hidden;
  margin: 0 auto; 
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  width: calc(100% * (100 / 50));
  padding: 30px;
}

.carousel-control {
  background-color: #d88f94; 
  color: white; 
  border: none; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px;
  font-size: 1.5rem; 
  cursor: pointer; 
  position: absolute; 
  top: 50%;
  transform: translateY(-50%); 
  z-index: 2; 
  transition: background-color 0.3s ease, transform 0.3s ease; 
}

.carousel-control.prev {
  left: 10px; 
}

.carousel-control.next {
  right: 10px; 
}

.carousel-control:hover {
  background-color: #c77b86; 
  transform: translateY(-50%) scale(1.1); 
}

@media (max-width: 700px) {
  .carousel-control {
    width: 30px; 
    height: 30px;
    font-size: 1.2rem; 
  }
}

.category {
  width: 50%; 
  text-align: center;
}

.category-image {
  width: 90%; 
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.promo-section {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #f0f0f0;
}

.promo-item {
  max-width: 300px;
  text-align: center;
}

.promo-item h3 {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.promo-item p {
  font-family: "Georgia", serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.promo-link {
  font-family: "Georgia", serif;
  font-size: 1.1rem;
  color: #d88f94; 
  text-decoration: none;
}

.promo-link:hover {
  color: #c77b86; 
}

.newsletter-section {
  padding: 40px;
  text-align: center;
  background-color: #fff;
}

.newsletter-section h3 {
  font-family: "Georgia", serif;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.newsletter-section p {
  font-family: "Georgia", serif;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
}

.newsletter-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}

.newsletter-submit {
  background-color: #d88f94;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-submit:hover {
  background-color: #c77b86; 
}

.navigation-links {
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.link-button {
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
}

@media (max-width: 600px) {
  .promo-section {
    flex-direction: column;
    align-items: center;
  }

  .promo-item {
    margin-bottom: 20px;
  }

  .newsletter-input {
    width: 100%;
  }

  .newsletter-submit {
    width: auto;
  }

  .link-button {
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .cta-button {
    font-size: 1rem;
  }

  .carousel {
    padding: 15px;
  }

  .category {
    width: 100%;
  }

  .category-image {
    width: 100%;
  }
}
</style>

