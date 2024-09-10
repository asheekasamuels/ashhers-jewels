<template>
  <div class="auth-page">
    <div class="auth-banner">
      <h1>Create an Account</h1>
      <p>Join us to access exclusive jewelry collections.</p>
    </div>

    <div class="auth-container">
      <!-- Registration Form -->
      <div class="form-container">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" v-model="payload.firstName" required />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" v-model="payload.lastName" required />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" placeholder="Age" v-model="payload.userAge" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" v-model="payload.emailAdd" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" v-model="payload.userPass" required />
          </div>

          <button type="submit" class="auth-btn">Register</button>
        </form>
      </div>
    </div>

    <div class="auth-footer">
      <p>Already have an account? <router-link to="/login" class="link">Log in here</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const payload = reactive({
  firstName: '',
  lastName: '',
  userAge: '',
  emailAdd: '',
  userPass: '',
});

function register() {
  store.dispatch('register', payload);
}
</script>
  
  <style scoped>
  .auth-page {
    max-width: 1300px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: "Georgia", serif;
    color: #000;
  }
  
  .auth-banner {
    background-color: #f9e5e8; /* Baby pink */
    text-align: center;
    padding: 40px 20px;
    color: #000;
  }
  
  .auth-banner h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .auth-banner p {
    font-size: 18px;
  }
  
  .auth-container {
    margin: 40px 0;
  }
  
  .form-container {
    background-color: #fff;
    border: 1px solid #c0c0c0; /* Silver border */
    padding: 30px;
    border-radius: 8px;
  }
  
  .form-container h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #c0c0c0; /* Silver border */
    border-radius: 5px;
    font-size: 16px;
  }
  
  .auth-btn {
    background-color: #000;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin-top: 10px;
  }
  
  .auth-btn:hover {
    background-color: #f9e5e8; /* Baby pink hover */
    color: #000;
  }
  
  .auth-footer {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
  }
  
  .auth-footer .link {
    color: #ff69b4; /* Hot pink */
    font-weight: bold;
    text-decoration: none;
  }
  
  .auth-footer .link:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .auth-container {
      padding: 20px;
    }
  }
  </style>
  