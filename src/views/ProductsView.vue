<template>
  <div class="products-page">
    <div class="products-banner">
      <h1>Our Products</h1>
      <p>Discover our collection of beautiful jewelry.</p>
    </div>
    <div class="container">
      <div class="options">
        <div class="search-category">
          <!-- Search Bar and Category Dropdown -->
          <input
            type="text"
            v-model="searchQuery"
            class="search-input"
            placeholder="Search"
          />
          <select v-model="selectedCategory" class="category-btn">
            <option value="All">All</option>
            <option value="Rings">Rings</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Necklaces">Necklaces</option>
          </select>
        </div>

        <!-- Sort Buttons on the Right -->
        <div class="sort-buttons">
          <button @click="sortByPrice" class="sort-btn">Sort by Price</button>
          <button @click="sortByName" class="sort-btn">Sort by Name</button>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="products-grid" v-if="filteredProducts.length">
        <Card
          v-for="product in filteredProducts"
          :key="product.prodID"
          class="product-card"
        >
          <template #cardHeader>
            <img
              :src="product.prodUrl"
              loading="lazy"
              class="product-image"
              :alt="product.prodName"
            />
          </template>
          <template #cardBody>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="product-price">R{{ product.amount }}</p>
            <button @click="goToProduct(product)" class="toggle-description-btn">
              View More
            </button>
            <button @click="addToCart(product)" class="add-to-cart-btn">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </template>
        </Card>
      </div>

      <!-- No Products Found or Loading Spinner -->
      <div v-else>
        <SpinnerComp v-if="loading" />
        <p v-if="!loading && !filteredProducts.length">No products found</p>
      </div>
    </div>

    <div class="products-footer">
      <p>Explore more of our collection. We have something for everyone!</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SpinnerComp from '@/components/SpinnerComp.vue';
import Card from '@/components/Card.vue';

const store = useStore();
const searchQuery = ref('');
const selectedCategory = ref('All'); // Default to "All"
const router = useRouter();

onMounted(() => {
  store.dispatch('fetchProducts');
});

const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);

const sortByPrice = () => {
  store.dispatch('sortByPrice');
};

const sortByName = () => {
  store.dispatch('sortByName');
};

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};

const goToProduct = (product) => {
  router.push({ name: 'SingleView', params: { id: product.prodID } });
};

const filteredProducts = computed(() => {
  let result = products.value;

  // Filter by selected category
  if (selectedCategory.value !== 'All') {
    result = result.filter(product =>
      product.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    result = result.filter(product =>
      product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return result;
});
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.products-banner {
  background-color: #f9e5e8; /* Light pink background */
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.products-banner h1 {
  color: #d88f94; /* Baby pink color */
  font-size: 2.5rem;
}

.products-banner p {
  color: #555; /* Darker gray for readability */
}

.container {
  margin-top: 20px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-category {
  display: flex;
  gap: 10px; /* Space between search and dropdown */
}

.search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 250px; /* Fixed width for search input */
}

.category-btn {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

.sort-buttons {
  display: flex;
  gap: 10px; /* Space between sort buttons */
}

.sort-btn {
  background-color: #d88f94; /* Baby pink for sort buttons */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sort-btn:hover {
  background-color: #c77b84; /* Darker pink on hover */
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 45px; /* Space between product cards */
}

.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Rounded corners for cards */
  transition: transform 0.3s; /* Smooth scale effect on hover */
}

.product-card:hover {
  transform: scale(1.02); /* Slightly scale up on hover */
}

.product-image {
  width: 100%;
  height: auto;
}

.card-title {
  margin: 10px 0;
  color: #333; /* Dark text color for product names */
}

.product-price {
  font-weight: bold;
  color: #d88f94; /* Baby pink for prices */
}

.toggle-description-btn {
  background-color: transparent;
  border: none;
  color: #d88f94; /* Baby pink for "View More" */
  cursor: pointer;
  margin-top: 10px; /* Space above button */
}

.add-to-cart-btn {
  background-color: #d88f94; /* Baby pink for add to cart button */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #c77b84; /* Darker pink on hover */
}

.products-footer {
  text-align: center;
  margin-top: 40px;
  color: #777; /* Lighter text color */
}

/* Media Queries for 700px */
@media (max-width: 700px) {
  .options {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-category {
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }

  .search-input,
  .category-btn {
    width: 100%;
  }

  .sort-buttons {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .products-banner h1 {
    font-size: 2rem;
  }
}

/* Media Queries for 300px */
@media (max-width: 300px) {
  .products-page {
    padding: 20px 10px;
  }

  .products-banner {
    padding: 20px 10px;
  }

  .products-banner h1 {
    font-size: 1.5rem;
  }

  .options {
    flex-direction: column;
  }

  .search-category {
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }

  .search-input,
  .category-btn,
  .sort-buttons button {
    width: 100%;
  }

  .sort-buttons {
    margin-top: 10px;
    flex-direction: column;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .product-card {
    padding: 10px;
  }
}
</style>
