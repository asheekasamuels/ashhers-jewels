<template>
  <div class="product-page">
    <router-link to="/products">
      <button class="back-button">← Go Back</button>
    </router-link>

    <SpinnerComp v-if="loading" class="loading-spinner" />

    <div v-if="error" class="error-message">{{ error }}</div>

    <div class="row justify-content-center" v-if="product">
      <card-comp class="product">
        <template #cardHeader>
          <img
            :src="product.prodUrl"
            loading="lazy"
            class="img-fluid"
            style="width: 200px"
            :alt="product.prodName"
            data-aos="flip-right"
            data-aos-duration="1500"
          />
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDesc }}</p>
          <p class="lead">
            <span class="lead1 fw-bold">Amount</span>: R{{ product.amount }}
          </p>
        </template>
      </card-comp>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import CardComp from "@/components/CardComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const product = computed(() => store.state.product);
const loading = computed(() => store.state.loading); 
const error = computed(() => store.state.error); 

onMounted(() => {
  console.log(route.params.id);
  
  store.dispatch("fetchProduct", route.params.id); 
});
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

.product {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.card-title {
  color: #d88f94;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.lead {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.error-message {
  color: red;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.loading-spinner {
  margin-top: 40px;
}

/* Media Queries for Responsiveness */
@media (max-width: 700px) {
  .card-title {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.25rem;
  }

  .back-button {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  .product {
    padding: 20px;
  }
}

@media (max-width: 300px) {
  .card-title {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 1rem;
  }

  .back-button {
    font-size: 0.8rem;
    padding: 6px 10px;
  }

  .product {
    padding: 15px;
  }
}

</style>
