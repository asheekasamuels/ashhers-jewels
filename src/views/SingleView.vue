<template>
  <div class="product-page">
    <router-link to="/products">
      <button class="back-button">← Go Back</button>
    </router-link>
    
    <div v-if="product" class="product-details">
      <h1 class="product-title">{{ product?.prodName }}</h1>
      <div class="product-card-container">
        <img :src="product.prodURL" :alt="product.prodName" class="product-image" />
        <div class="card-content">
          <p class="card-info">Description: <span>{{ product.prodDesc }}</span></p>
          <p class="card-info">Category: <span>{{ product.category }}</span></p>
          <p class="product-price">Price: <span>R{{ product.amount }}</span></p>
          <div class="button-container">
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    
    <SpinnerComp v-else class="loading-spinner" />
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
    window.scrollTo(0, 0); 
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

.back-button {
  background-color: #d88f94; 
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; 
}

.back-button:hover {
  background-color: #c77b86; 
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

.product-title {
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

.card-info {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px; 
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

.loading-spinner {
  margin-top: 40px; 
}
</style>
