<template>
  <div class="product-page" v-if="product">
    <div class="product-details">
      <h1>{{ product[0].prodName }}</h1>
      <img
        :src="product[0].prodUrl"
        :alt="product[0].prodName"
        class="product-image"
      />
      <p class="product-price">Price: R{{ product[0].amount }}</p>
      <p class="product-description">{{ product[0].desc }}</p>
      <button @click="addToCart(product[0].prodID)" class="add-to-cart-btn">
        Add To Cart
      </button>
    </div>
  </div>
  <div v-else class="loading-container">
    <SpinnerComp />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import SpinnerComp from '@/components/SpinnerComp.vue';

const store = useStore();
const route = useRoute();

const product = computed(() => store.state.product);

store.dispatch('getSingleProduct', route.params.id);
store.dispatch('getProducts');

function addToCart(prodID) {
  const user = store.state.user;
  if (user.userID) {
    store.dispatch('addToCart', {
      userID: user.userID,
      prodID
    });
  }
}
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.product-details {
  background-color: #fff; 
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.product-details h1 {
  color: #d88f94; 
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-price {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.product-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
}

.add-to-cart-btn {
  background-color: #d88f94; 
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.add-to-cart-btn:hover {
  background-color: #c77b86; 
}

.loading-container {
  display: flex;
  justify-content: center;
  padding: 40px;
}
</style>
