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
      </div>
      <div class="products-grid" v-if="filteredProducts.length">
        <Card v-for="product in filteredProducts" :key="product.prodID" class="product-card">
          <template #cardHeader>
            <img :src="product.prodUrl" loading="lazy" class="product-image" :alt="product.prodName" />
          </template>
          <template #cardBody>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="product-price">R{{ product.amount }}</p>
            <p class="product-description">{{ product.prodDesc }}</p>
            <button @click="addToCart(product)" class="add-to-cart-btn">Add to Cart</button>
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
import { computed, onMounted, ref, watch } from 'vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
import Card from '@/components/Card.vue';

const store = useStore();
const searchQuery = ref('');


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


const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return products.value;
  }
  return products.value.filter(product =>
    product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


watch(searchQuery, (newQuery) => {
  console.log('Search query updated:', newQuery);
});
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
  border-radius: 20px;
  font-size: 16px;
}

.sort-buttons {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

.sort-btn {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
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
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

.add-to-cart-btn {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
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
