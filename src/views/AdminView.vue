<template>
  <div class="admin-page">
    <div class="admin-banner">
      <h1>Admin Dashboard</h1>
      <p>Manage your jewelry inventory here.</p>
    </div>

    <div class="tables-section">
      <div class="table-container">
        <h2>User Table</h2>
        <div class="text-center"></div>
        <div class="styled-table">
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th class="none">Email Address</th>
                <th class="none">Age</th>
                <th class="none">Role</th>
                <th class="none">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td class="none">{{ user.emailAdd }}</td>
                <td class="none">{{ user.userAge }}</td>
                <td class="none">{{ user.userRole }}</td>
                <td class="none">
                  <button class="btn-delete" @click="delUser(user.userID)">Delete</button>
                  <EditUser :user="user" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="table-container">
        <h2>Products Table</h2>
        <div class="text-center">
          <AddProduct />
        </div>
        <div class="styled-table">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th class="none">Quantity</th>
                <th class="none">Category</th>
                <th>Price</th>
                <th class="none">Product Image</th>
                <th class="none">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.productID">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td class="none">{{ product.quantity }}</td>
                <td class="none">{{ product.category }}</td>
                <td>{{ product.amount }}</td>
                <td class="img-small">
                  <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid" />
                </td>
                <td class="none">
                  <button class="btn-delete" @click="delProduct(product.prodID)">Delete</button>
                  <EditProduct :product="product" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="admin-footer">
      <p>Thank you for managing the jewelry inventory with us.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import AddProduct from '@/components/AddProduct.vue';
import EditUser from '@/components/EditUser.vue';
import EditProduct from '@/components/EditProduct.vue';

const store = useStore();

const users = computed(() => store.state.users);
const products = computed(() => store.state.products);

onMounted(() => {
  store.dispatch('fetchUsers');
  store.dispatch('fetchProducts');
});

const delUser = (userID) => {
  store.dispatch('deleteUser', userID);
};

const delProduct = (prodID) => {
  store.dispatch('deleteProduct', prodID);
};
</script>

<style scoped>
.admin-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.admin-banner {
  background-color: #f9e5e8;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.admin-banner h1 {
  color: #d88f94;
  font-size: 2.5rem;
}

.admin-banner p {
  color: #555;
}

.tables-section {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.table-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.table-container h2 {
  margin-bottom: 20px;
  color: #d88f94;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
}

.styled-table table {
  width: 100%;
}

.styled-table th,
.styled-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.styled-table th {
  background-color: #f1f1f1;
  color: #333;
}

.styled-table tbody tr:hover {
  background-color: #f9e8e9;
}

.btn-delete {
  background-color: #d88f94;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-delete:hover {
  background-color: #c77b84;
}

.img-small {
  width: 50px;
  height: auto;
  object-fit: cover;
}

@media (max-width: 700px) {
  .img-small {
    width: 80px;
  }
}

@media (max-width: 300px) {
  .img-small {
    width: 60px;
  }
}

.admin-footer {
  text-align: center;
  margin-top: 20px;
  color: #777;
}
</style>
