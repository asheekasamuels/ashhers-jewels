<template>
  <div class="products">
      <h1>Products</h1>
    <div class="container">
      
      <div class="options row mb-4">
        <div class="col-md-6">
          <div class="search">
            <input type="text" v-model="searchQuery" class="form-control search-input" placeholder="Search" />
          </div>
        </div>
        <div class="col-md-6 text-md-right">
          <button @click="sortByPrice" class="sort-btn">Sort by Price</button>
          <button @click="sortByName" class="sort-btn">Sort by Name</button>
        </div>
      </div>
      <div class="row gap-2 justify-content-center my-2" v-if="filteredProducts.length">
        <Card v-for="product in filteredProducts" v-bind:key="product.prodID" class="product-card">
          <template #cardHeader>
            <img :src="product.prodURL" loading="lazy" class="img-fluid product-image" :alt="product.prodName">
          </template>
          <template #cardBody>
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="product-price">R{{ product.amount }}</p>
            <div class="button-wrapper">
              <router-link class="prod-btn" :to="{name:'product',params:{id:product.prodID}}">
                <button class="btn btn-dark go-to-product-btn">Go to Product</button>
              </router-link>
            </div>
          </template>
        </Card>
      </div>
      <div v-else>
        <SpinnerComp v-if="loading" />
      </div>
    </div>
  </div>
</template>

<script setup>
/*eslint-disable*/
import { useStore } from 'vuex'
import { computed, onMounted, ref  } from 'vue'
import SpinnerComp from '@/components/SpinnerComp.vue'
import Card from '@/components/Card.vue'
import { useRoute } from 'vue-router'

const store = useStore()
const products = computed(() => store.state.products)
const searchQuery = ref('')
const loading = computed(() => store.state.loading)

onMounted(() => {
  store.dispatch('fetchProducts')
})

function sortByPrice() {
  store.dispatch('sortByPrice')
}

function sortByName() {
  store.dispatch('sortByName')
}

const filteredProducts = computed(() => {
  if (products.value === null) {
    return []
  }
  return products.value.filter(product => {
    return product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})
</script>

<style scoped>

.products {
  text-align: center;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
  background-color: #fff;
}


.products-title h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
}


.search-input {
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 1rem;
}


.sort-btn {
  background-color: #ffcccb; 
  border: none;
  color: #000000;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.sort-btn:hover {
  background-color: #ff9999; 
  color: #ffffff;
}


.product-card {
  background-color: #f8f8f8;
  border: none;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}


.product-image {
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #d3d3d3; 
}


.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
}


.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff69b4; 
}


.go-to-product-btn {
  background-color: #000000;
  color: #ffffff;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.go-to-product-btn:hover {
  background-color: #ffcccb; 
  color: #000000;
}


.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
