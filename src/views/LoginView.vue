<template>
  <div class="auth-page">
    <div class="auth-banner">
      <h1>Welcome Back</h1>
      <p>Please log in to access your account.</p>
    </div>

    <div class="auth-container">
      <div class="form-container">
        <h2>Login</h2>
        <form class="form" @submit.prevent="login">
          <div class="form-group">
            <label for="login-email">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="payload.emailAdd"
              pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="payload.userPass"
              minlength="4"
              required
            />
          </div>
          <button type="submit" class="auth-btn">Login</button>
        </form>

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
import { useStore } from 'vuex';
import { reactive } from 'vue';

const store = useStore();
const payload = reactive({
  emailAdd: "",
  userPass: ""
});

function login() {
  store.dispatch('login', {
    emailAdd: payload.emailAdd,
    userPass: payload.userPass
  });
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
  background-color: #f9e5e8;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.auth-banner h1 {
  color: #d88f94;
  font-size: 2.5rem;
}

.auth-banner p {
  color: #555;
}

.auth-container {
  margin-top: 30px;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  color: #d88f94;
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

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border 0.3s ease;
}

.form-control:focus {
  border-color: #d88f94;
  outline: none;
}

.auth-btn {
  background-color: #d88f94;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.auth-btn:hover {
  background-color: #c77b86;
}

.sign-up-link {
  margin-top: 15px;
  text-align: center;
}

.link {
  color: #d88f94;
  text-decoration: underline;
}

.auth-footer {
  margin-top: 30px;
  text-align: center;
}

.auth-footer p {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 700px) {
  .auth-page {
    padding: 30px 15px;
  }

  .auth-banner h1 {
    font-size: 2rem;
  }

  .auth-banner p {
    font-size: 1rem;
  }

  .form-container h2 {
    font-size: 1.5rem;
  }

  .form-control {
    padding: 8px;
  }

  .auth-btn {
    font-size: 0.9rem;
  }

  .auth-footer p {
    font-size: 0.8rem;
  }
}

@media (max-width: 400px) {
  .auth-page {
    padding: 20px 10px;
  }

  .auth-banner h1 {
    font-size: 1.8rem;
  }

  .auth-banner p {
    font-size: 0.9rem;
  }

  .form-container h2 {
    font-size: 1.3rem;
  }

  .form-control {
    padding: 6px;
  }

  .auth-btn {
    font-size: 0.8rem;
  }

  .auth-footer p {
    font-size: 0.7rem;
  }
}
</style>
