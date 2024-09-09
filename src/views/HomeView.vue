<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <video autoplay muted loop>
          <source src="" type="video/mp4"> 
        </video>
        <div class="overlay"></div>
        <h1>Ashhers Jewels</h1>
        <p>Discover our latest collections and find the perfect piece that tells your unique story.</p>
        <a href="/products" class="cta-button">Shop Now</a>
      </div>
    </section>

    <!-- Product Categories Section -->
    <section class="product-categories">
      <h2>Discover a world of jewellery</h2>
      <div class="categories-container">
        <div class="category">
          <img src="https://www.pandorashop.co.za/media/catalog/product/l/o/low_590041c02_abc123_model_ecom_02_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="Bracelets" class="category-image" />
          <a @click.prevent="goToCategory('bracelets')" class="category-link">Bracelets</a>
        </div>
        <div class="category">
          <img src="https://www.pandorashop.co.za/media/catalog/product/m/e/medium_q324_e_pdp_model_single_04_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="Rings" class="category-image" />
          <a @click.prevent="goToCategory('rings')" class="category-link">Rings</a>
        </div>
        <div class="category">
          <img src="https://www.pandorashop.co.za/media/catalog/product/l/o/low_392542c01_v2_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="Necklaces" class="category-image" />
          <a @click.prevent="goToCategory('necklaces')" class="category-link">Necklaces</a>
        </div>
        <div class="category">
          <img src="https://www.pandorashop.co.za/media/catalog/product/l/o/low_292549c01_rgb.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover" alt="Earrings" class="category-image" />
          <a @click.prevent="goToCategory('earrings')" class="category-link">Earrings</a>
        </div>
      </div>
    </section>

    <!-- Navigation Links -->
    <section class="links">
      <a href="/about" class="link-button">About Us</a>
      <a href="/products" class="link-button">All Products</a>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();

    const goToCategory = (category) => {
      router.push(`/products/${category}`);
    };

    return {
      goToCategory
    };
  }
};
</script>

<style scoped>
.home {
  font-family: "Georgia", serif;
  color: #333;
  margin: 0;
  padding: 0;
}
.header {
  position: relative;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  margin-top: 70px; /* Adjust for the fixed nav bar */
}
header video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
 }
header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay to enhance text visibility */
  z-index: 1;
}
/* Hero Section */
.hero {
  background: url('') no-repeat center center/cover;
  padding: 80px 20px;
  color: black;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 10px;
  color: black;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.1em;
  color: #fff;
  background-color: #c0c0c0; /* Silver */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #b0b0b0; /* Darker silver */
}

/* Product Categories Section */
.product-categories {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9e5e8; /* Baby pink */
}

.product-categories h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #000;
}

.categories-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.category {
  text-align: center;
  width: 200px;
}

.category-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
}

.category-link {
  display: block;
  font-size: 1.2em;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  margin-top: 5px;
}

.category-link:hover {
  color: #555;
}

/* Navigation Links Section */
.links {
  padding: 20px;
  text-align: center;
}

.link-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #000; /* Black */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.link-button:hover {
  background-color: #333; /* Darker black */
}
</style>
