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
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              v-model="payload.firstName"
              required
            />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              v-model="payload.lastName"
              required
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              v-model="payload.userAge"
              required
            />
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <input
              type="text"
              id="gender"
              placeholder="Gender"
              v-model="payload.gender"
              required
            />
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <input
              type="text"
              id="role"
              placeholder="Role"
              v-model="payload.userRole"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              v-model="payload.emailAdd"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="payload.userPass"
              required
            />
          </div>
          <div class="form-group">
            <label for="profile-image">Profile Image</label>
            <input
              type="text"
              id="profile-image"
              placeholder="Profile Image"
              v-model="payload.userProfile"
              required
            />
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
import store from '@/store';
import { reactive } from 'vue';

const payload = reactive({
  firstName: "",
  lastName: "",
  userAge: 0,
  gender: "",
  userRole: "",
  emailAdd: "",
  userPass: "",
  userProfile: "https://codjoelmayer.github.io/projectImages/images/profile-Image.png"
});

function register() {
  const cred = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    userAge: payload.userAge,
    gender: payload.gender,
    userRole: payload.userRole,
    emailAdd: payload.emailAdd,
    userPass: payload.userPass,
    userProfile: payload.userProfile
  };

  store.dispatch('registerUser', cred);
}
</script>

<style scoped>
.auth-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Georgia", serif;
  color: #333;
}

.auth-banner {
  background-color: #f9e5e8; /* Light pink background */
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.auth-banner h1 {
  color: #d88f94; /* Baby pink color */
  font-size: 2.5rem;
}

.auth-banner p {
  color: #555; /* Darker gray for readability */
}

.auth-container {
  margin-top: 30px;
}

.form-container {
  background-color: #fff; /* White background for form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  color: #d88f94; /* Baby pink for form heading */
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s ease;
}

.form-group input:focus {
  border-color: #d88f94; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.auth-btn {
  background-color: #d88f94; /* Baby pink button */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.auth-btn:hover {
  background-color: #c77b86; /* Darker pink on hover */
}

.auth-footer {
  margin-top: 30px;
  text-align: center;
}

.auth-footer p {
  font-size: 0.9rem;
}

.link {
  color: #d88f94; /* Baby pink for sign-in link */
  text-decoration: underline;
}
</style>

  