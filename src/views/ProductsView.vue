<template>
  <div class="products-page">
    <div class="products-banner">
      <h1>Our Products</h1>
      <p>Discover our collection of beautiful jewelry.</p>
    </div>
    <div class="container">
      <div class="options">
        <div class="search-container">
          <input 
            type="text" 
            v-model="searchQuery" 
            class="search-input" 
            placeholder="Search" 
          />
          <div class="sort-buttons">
            <button @click="sortByPrice" class="sort-btn">Sort by Price</button>
            <button @click="sortByName" class="sort-btn">Sort by Name</button>
          </div>
        </div>
        <div class="category-buttons">
          <button @click="filterByCategory('necklace')" class="category-btn">Necklaces</button>
          <button @click="filterByCategory('ring')" class="category-btn">Rings</button>
          <button @click="filterByCategory('earring')" class="category-btn">Earrings</button>
          <button @click="filterByCategory('bracelet')" class="category-btn">Bracelets</button>
          <button @click="clearCategoryFilter" class="category-btn">All</button>
        </div>
      </div>
      <div class="products-grid" v-if="filteredProducts.length">
        <Card v-for="product in filteredProducts" :key="product.prodID" class="product-card">
          <template #cardHeader>
            <img :src="product.prodUrl" loading="lazy" class="product-image" :alt="product.prodName" />
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
const selectedCategory = ref('');
const router = useRouter();

onMounted(() => {
  store.dispatch('fetchProducts');
});

const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);

const sortByPrice = () => store.dispatch('sortByPrice');
const sortByName = () => store.dispatch('sortByName');

const addToCart = (product) => {
  store.dispatch('addToCart', product);
};

const goToProduct = (product) => {
  router.push({ name: 'SingleView', params: { id: product.prodID } });
};

const filteredProducts = computed(() => {
  let result = products.value;

  if (selectedCategory.value) {
    result = result.filter(product =>
      product.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

  if (searchQuery.value) {
    result = result.filter(product =>
      product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return result;
});

const filterByCategory = (category) => {
  selectedCategory.value = category;
};

const clearCategoryFilter = () => {
  selectedCategory.value = ''; // Changed to empty string
};
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #000;
}

.products-banner {
  background-color: #f9e5e8;
  text-align: center;
  padding: 40px 20px;
  color: #000;
}

.products-banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.products-banner p {
  font-size: 18px;
}

.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 2px solid #c0c0c0;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.sort-buttons {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

.sort-btn {
  background-color: #ff69b4;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px; 
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.sort-btn:hover {
  background-color: #f9e5e8; 
  color: #000; 
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 20px;
  gap: 30px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #c0c0c0;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
}

.product-card:hover {
  transform: translateY(-3px); 
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff69b4; 
  margin-bottom: 15px;
}

.product-description {
  margin-bottom: 15px;
}

.toggle-description-btn {
  background-color: #f9e5e8; 
  color: #000;
  padding: 10px 20px;
  border-radius: 25px; 
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.toggle-description-btn:hover {
  background-color: #ff69b4; 
  color: #fff; 
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.category-btn {
  background-color: #fff; 
  color: #333; 
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid #ccc; 
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.category-btn:hover {
  background-color: #f0f0f0; 
  color: #000; 
  border-color: #999; 
}

.category-btn:active {
  transform: translateY(1px);
}

.category-btn:focus {
  outline: none; 
  box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5); 
}

.add-to-cart-btn {
  background-color: #ff69b4;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.add-to-cart-btn i {
  margin-right: 8px; 
}

.add-to-cart-btn:hover {
  background-color: #f9e5e8; 
  color: #000; 
}

.products-footer {
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .products-page {
    padding: 20px;
  }

  .products-banner h1 {
    font-size: 28px;
  }

  .products-banner p {
    font-size: 16px;
  }

  .search-container {
    flex-direction: column;
    gap: 20px;
  }

  .sort-buttons {
    justify-content: center;
    margin: 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}

</style>