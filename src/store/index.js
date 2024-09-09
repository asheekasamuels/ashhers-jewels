import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { applyToken } from '../../src/service/AuthenticatedUser.js';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const apiURL = 'https://ashhers-jewels.onrender.com';

// Apply token if it exists
const token = cookies.get('LegitUser')?.token;
if (token) {
  applyToken(token);
}

export default createStore({
  state: {
    users: [],
    user: null,
    products: [],
    recentProducts: null,
    product: null,
    cart: [],
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, value) {
      state.error = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setRecentProducts(state, value) {
      state.recentProducts = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setCart(state, value) {
      state.cart = value;
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, prodID) {
      state.cart = state.cart.filter(item => item.prodID !== prodID);
    },
    sortByPrice(state) {
      state.products.sort((a, b) => a.amount - b.amount);
    },
    sortByName(state) {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    }
  },
  actions: {
    async fetchProducts({ commit }) { 
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiURL}/products`);
        const { results } = response.data;
        if (Array.isArray(results)) {
          commit('setProducts', results);
        } else {
          throw new Error('Invalid products data format');
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchUsers({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiURL}/users`);
        const { results } = response.data;
        if (Array.isArray(results)) {
          commit('setUsers', results);
        } else {
          throw new Error('Invalid users data format');
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCart({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`${apiURL}/cart`);
        const { results } = response.data;
        if (Array.isArray(results)) {
          commit('setCart', results);
        } else {
          throw new Error('Invalid cart data format');
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', e.message);
      } finally {
        commit('setLoading', false);
      }
    },
    sortByPrice({ commit }) {
      commit('sortByPrice');
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, prodID) {
      commit('removeFromCart', prodID);
    },
    async deleteUser({ commit, state }, userID) { 
      try {
        await axios.delete(`${apiURL}/users/${userID}`);
        commit('setUsers', state.users.filter(user => user.userID !== userID));
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', e.message);
      }
    },
    async updateUser({ commit}, payload) {
      try {
        const response = await axios.put(`${apiURL}/users/${payload.userID}`, payload);
        commit('setUser', response.data); // Update the user in the state
        toast.success('User updated successfully', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        return response.data; // Return the updated user
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', error.message); // Set the error in the state
        throw error; // Re-throw the error to be caught in your component
      }
    },
    async deleteProduct({ commit, state }, prodID) {
      try {
        await axios.delete(`${apiURL}/products/${prodID}`);
        commit('setProducts', state.products.filter(product => product.productID !== prodID));
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        commit('setError', e.message);
      }
    },
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    hasError(state) {
      return state.error !== null;
    },
    getError(state) {
      return state.error;
    },
    getCart(state) {
      return state.cart;
    },
    getUsers(state) {
      return state.users;
    },
    getProducts(state) {
      return state.products;
    }
  }
});
