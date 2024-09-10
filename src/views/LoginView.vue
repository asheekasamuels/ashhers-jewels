<template>
    <div class="auth-page">
      <div class="auth-banner">
        <h1>Welcome Back</h1>
        <p>Please log in to access your account.</p>
      </div>
  
      <div class="auth-container">
        <!-- Login Form -->
        <div class="form-container">
          <h2>Login</h2>
          <form class="form" @submit.prevent="login">
            <div class="form-group">
              <label for="login-email">Email</label>
              <input type="email" class="form-control" placeholder="Email" v-model="payload.emailAdd" pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$" required />
            </div>
            <div class="form-group">
              <label for="login-password">Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="payload.userPass" minlength="4" required />
            </div>
            <button type="button" class="auth-btn" @click.prevent="login">Login</button>
          </form>
  
          <!-- Sign Up Link -->
          <p class="sign-up-link">
            Don't have an account? 
            <router-link to="/signup" class="link">sign up here</router-link>
          </p>
        </div>
      </div>
  
      <div class="auth-footer">
        <p>Access exclusive deals and manage your jewelry purchases by logging in.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { reactive } from 'vue'
  
  const store = useStore()
  const payload = reactive({
      emailAdd: "",
      userPass: ""
  })
  function login() {
      store.dispatch('login', {
          emailAdd: payload.emailAdd,
          userPass: payload.userPass
        
      })
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
  
  .sign-up-link {
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
  }
  
  .sign-up-link .link {
    color: #ff69b4; /* Hot pink */
    font-weight: bold;
    text-decoration: none;
  }
  
  .sign-up-link .link:hover {
    text-decoration: underline;
  }
  
  .auth-footer {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .auth-container {
      padding: 20px;
    }
  }
  </style>