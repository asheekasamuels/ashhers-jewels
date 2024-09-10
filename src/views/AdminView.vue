<template>
  <div class="admin-page">
    <div class="admin-banner">
      <h1>Admin Dashboard</h1>
      <p>Manage your jewelry inventory here.</p>
    </div>

    <div class="tables-section">
      <div class="table-container">
        <h2>User Table</h2>
        <div class="text-center">
          <AddUser />
        </div>
        <div class="styled-table" >
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
                  <button @click="delUser(user.userID)">Delete</button>
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
                <td class="none">
                  <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid" />
                </td>
                <td class="none">
                  <button @click="delProduct(product.prodID)">Delete</button>
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
import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
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
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #000;
}

.admin-banner {
  background-color: #f9e5e8;
  text-align: center;
  padding: 40px 20px;
  color: #000;
}

.admin-banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.admin-banner p {
  font-size: 18px;
}

.tables-section {
  display: flex;
  flex-direction: column; /* Stack tables vertically on smaller screens */
  align-items: center; /* Center the containers horizontally */
  margin: 40px 0;
}

.table-container {
  background-color: #fff;
  border: 1px solid #c0c0c0;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%; /* Make containers take full width */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: add shadow for depth */
}

.table-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  justify-content: center;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #c0c0c0;
}

.styled-table th {
  background-color: #f3f3f3;
  color: #000;
}

.styled-table tr:nth-child(even) {
  background-color: #f8f8f8;
}

.styled-table tr:hover {
  background-color: #ffe6f2;
}

.styled-table td {
  color: #333;
}

.styled-table tr:hover td {
  color: #000;
}

button {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff1493;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.styled-table img {
  max-width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.admin-footer {
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
}

@media (max-width: 700px) {
  .admin-page {
    padding: 20px;
  }

  .admin-banner h1 {
    font-size: 28px;
  }

  .admin-banner p {
    font-size: 16px;
  }

  .table-container h2 {
    font-size: 20px;
  }

  .styled-table th,
  .styled-table td {
    padding: 10px;
  }

  .styled-table th {
    font-size: 14px;
  }

  .styled-table td {
    font-size: 12px;
  }
}

@media (max-width: 300px) {
  .admin-page {
    padding: 10px;
  }

  .admin-banner h1 {
    font-size: 24px;
  }

  .admin-banner p {
    font-size: 14px;
  }

  .table-container h2 {
    font-size: 18px;
  }

  .styled-table th,
  .styled-table td {
    padding: 8px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .styled-table td {
    font-size: 10px;
  }

  .admin-footer {
    font-size: 12px;
  }
}


</style>
