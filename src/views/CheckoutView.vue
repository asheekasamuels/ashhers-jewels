<template>
  <div class="checkout-page">
    <div class="checkout-banner">
      <h1>Checkout</h1>
      <p>Complete your order and enjoy your new jewelry.</p>
    </div>
    <div class="order-summary">
      <h2>Order Summary</h2>
      <div class="order-items">
        <div v-if="cart.length">
          <div v-for="item in groupedCart" :key="item.prodID" class="order-item">
            <img :src="item.prodUrl" class="item-image" :alt="item.prodName" />
            <div class="item-details">
              <h3>{{ item.prodName }}</h3>
              <p>Price: R{{ item.amount }}</p>
              <p>Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          <div class="order-total">
            <h3>Total: R{{ totalAmount }}</h3>
          </div>
          <button class="btn-submit" @click="handlePurchase">Purchase</button>
        </div>
        <p v-else>Your cart is empty.</p>
      </div>
    </div>
    <div class="checkout-footer">
      <p>Thank you for choosing our jewelry. We hope you enjoy your purchase!</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { toast } from 'vue3-toastify';

const store = useStore();
const cart = computed(() => store.state.cart);
const groupedCart = computed(() => {
  const grouped = cart.value.reduce((acc, item) => {
    const found = acc.find(i => i.prodID === item.prodID);
    if (found) {
      found.itemCount += 1;
    } else {
      acc.push({ ...item, itemCount: 1 });
    }
    return acc;
  }, []);
  return grouped;
});
const totalAmount = computed(() => {
  return groupedCart.value.reduce((sum, item) => sum + (item.amount * item.itemCount), 0);
});
const handlePurchase = async () => {
  try {
    await store.dispatch('purchaseCart');
    toast.success('Successfully paid!', {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
    });
    store.commit('setCart', []);
  } catch (error) {
    toast.error(`Payment failed: ${error.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};
onMounted(() => {
  store.dispatch('fetchCart');
});
</script>

<style scoped>
.checkout-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.checkout-banner {
  background-color: #f9e5e8;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.checkout-banner h1 {
  color: #d88f94;
  font-size: 2.5rem;
}

.checkout-banner p {
  color: #555;
}

.order-summary {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.order-summary h2 {
  color: #d88f94;
  margin-bottom: 20px;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
}

.item-image {
  width: 80px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.item-details {
  flex-grow: 1;
}

.item-details h3 {
  margin: 0;
  color: #333;
}

.order-total {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.btn-submit {
  background-color: #d88f94;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.btn-submit:hover {
  background-color: #c77b84;
}

.checkout-footer {
  text-align: center;
  margin-top: 20px;
  color: #777;
}
</style>


  