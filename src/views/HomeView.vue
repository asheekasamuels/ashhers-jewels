<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Ashhers Jewels</h1>
        <p>Discover our latest collections and find the perfect piece that tells your unique story.</p>
        <a href="/products" class="cta-button">Shop Now</a>
      </div>
    </section>

    <!-- Recent Products Section -->
    <section class="recent-products">
      <h2>Recent Arrivals</h2>
      <div class="products-container">
        <div class="product">
          <img src="https://asheekasamuels.github.io/All-Images/images/Sparkling Infinity Heart Collier Necklace.webp" loading="lazy" alt="Sparkling Infinity Heart Collier Necklace" class="product-image" />
          <div class="product-info">
            <h3>Infinity Heart Collier Necklace</h3>
            <p>R 1399.00</p>
            <a href="/checkout?product=InfinityHeartCollierNecklace" class="add-to-cart-button">
              <img src="https://example.com/cart-icon.png" alt="Add to Cart" class="cart-icon" />
              Add to Cart
            </a>
          </div>
        </div>
        <div class="product">
          <img src="https://asheekasamuels.github.io/All-Images/images/Sparkling Pavè Bars Bracelet.webp" loading="lazy" alt="Sparkling Pavè Bars Bracelet" class="product-image" />
          <div class="product-info">
            <h3>Sparkling Pavè Bars Bracelet</h3>
            <p>R 1779.00</p>
            <a href="/checkout?product=SparklingPaveBarsBracelet" class="add-to-cart-button">
              <img src="https://example.com/cart-icon.png" alt="Add to Cart" class="cart-icon" />
              Add to Cart
            </a>
          </div>
        </div>
        <div class="product">
          <img src="https://asheekasamuels.github.io/All-Images/images/Row of Hearts Eternity Ring.webp" loading="lazy" alt="Row of Hearts Eternity Ring" class="product-image" />
          <div class="product-info">
            <h3>Row of Hearts Eternity Ring</h3>
            <p>R 1779.00</p>
            <a href="/checkout?product=RowOfHeartsEternityRing" class="add-to-cart-button">
              <img src="https://example.com/cart-icon.png" alt="Add to Cart" class="cart-icon" />
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <!-- <a href="/products" class="cta-button">View All Products</a> -->
    </section>

    <!-- Navigation Links -->
    <section class="links">
      <a href="/about" class="link-button">About Us</a>
      <a href="/products" class="link-button">All Products</a>
    </section>
  </div>
</template>


<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  font-family: "Georgia", serif;
  color: #333;
  margin: 0;
  padding: 0;
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

/* Recent Products Section */
.recent-products {
  padding: 40px 20px;
  text-align: center;
  background-color: #f9e5e8; /* Baby pink */
}

.recent-products h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #000;
}

.products-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.product {
  background-color: #fff;
  border: 1px solid #c0c0c0; /* Silver border */
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  width: 280px;
  padding: 15px;
}

.product-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #c0c0c0; /* Silver border */
}

.product-info {
  padding: 10px 0;
}

.add-to-cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #000; /* Black */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
}

.add-to-cart-button .cart-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.add-to-cart-button:hover {
  background-color: #333; /* Darker black */
}

.recent-products .cta-button {
  margin-top: 20px;
  background-color: #000; /* Black */
  border: none;
}

.recent-products .cta-button:hover {
  background-color: #333; /* Darker black */
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
