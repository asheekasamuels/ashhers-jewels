<template>
  <div class="home-page">
    <!-- Hero Section -->
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

    <!-- Product Categories Section -->
    <section class="product-categories">
      <h2>Discover a World of Jewellery</h2>
      <div class="categories-container">
        <div class="category" v-for="(category, index) in categories" :key="index">
          <img :src="category.image" :alt="category.name" class="category-image" />
          <a @click.prevent="goToCategory(category.name.toLowerCase())" class="category-link">{{ category.name }}</a>
        </div>
      </div>
    </section>

    <!-- Navigation Links -->
    <section class="navigation-links">
      <a href="/about" class="link-button">About Us</a>
      <a href="/products" class="link-button">All Products</a>
    </section>
  </div>
</template>

<script setup>
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
];

function goToCategory(category) {
  window.location.href = `/products/${category}`

}
</script>

<style scoped>
/* Hero Section */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.hero-content {
  color: black;
  text-align: center;
  z-index: 1;
}

.hero-content h1 {
  font-family: "Georgia", serif;
  font-size: 3rem;
  font-weight: bold;
  color: #d88f94; /* Baby pink */
  margin-bottom: 20px;
}

.hero-content p {
  font-family: "Georgia", serif;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #d88f94; /* Baby pink */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c77b86; /* Darker pink on hover */
}

/* Product Categories Section */
.product-categories {
  padding: 60px 20px;
  text-align: center;
}

.product-categories h2 {
  font-family: "Georgia", serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
}

.categories-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.category {
  max-width: 240px;
  text-align: center;
}

.category-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-link {
  font-family: "Georgia", serif;
  display: block;
  margin-top: 15px;
  font-size: 1.2rem;
  color: #d88f94; /* Baby pink */
  text-decoration: none;
  transition: color 0.3s ease;
}

.category-link:hover {
  color: #c77b86; /* Darker pink on hover */
}

/* Navigation Links */
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
  transition: background-color 0.3s ease;
}

.link-button:hover {
  background-color: #e0e0e0;
}
</style>

