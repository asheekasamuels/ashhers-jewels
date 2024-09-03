<template>
  <div class="admin-page">
    <div class="admin-banner">
      <h1>Admin Dashboard</h1>
      <p>Manage your jewelry inventory here.</p>
    </div>

    <div class="tables-section">
      <div class="table-container">
        <h2>Cart Table</h2>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Cart ID</th>
              <th>User ID</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Row -->
            <tr>
              <td>#1234</td>
              <td>User456</td>
              <td>$200</td>
              <td>2023-09-02</td>
            </tr>
            <!-- Additional rows here -->
          </tbody>
        </table>
      </div>

      <div class="table-container">
        <h2>User Table</h2>
        <table class="styled-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Row -->
            <tr>
              <td>#456</td>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td>Admin</td>
            </tr>
            <!-- Additional rows here -->
          </tbody>
        </table>
      </div>

      <div class="table-container">
        <h2>Products Table</h2>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example Row -->
            <tr>
              <td>#789</td>
              <td>Silver Bracelet</td>
              <td>$150</td>
              <td>20</td>
            </tr>
            <!-- Additional rows here -->
          </tbody>
        </table>
      </div>
    </div>

    <div class="admin-footer">
      <p>Thank you for managing the jewelry inventory with us.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.admin-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #000;
}

.admin-banner {
  background-color: #f9e5e8; /* Baby pink */
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
  margin: 40px 0;
}

.table-container {
  background-color: #fff;
  border: 1px solid #c0c0c0; /* Silver border */
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.table-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #c0c0c0; /* Silver border */
}

.styled-table th {
  background-color: #f3f3f3; /* Silver header background */
  color: #000;
}

.styled-table tr:nth-child(even) {
  background-color: #f8f8f8;
}

.styled-table tr:hover {
  background-color: #ffe6f2; /* Baby pink hover */
}

.styled-table td {
  color: #333;
}

.styled-table tr:hover td {
  color: #000;
}

.admin-footer {
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
}

@media (max-width: 768px) {
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
}
</style>

  