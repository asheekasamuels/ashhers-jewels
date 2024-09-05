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
    users: null,
    user: null,
    products: [],
    recentProducts: null,
    product: [],
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
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.prodID !== productId);
    },
    sortByPrice(state) {
      state.products.sort((a, b) => a.amount - b.amount);
    },
    sortByName(state) {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    }
  },
  actions: {
    async fetchProducts(context) {
      context.commit('setLoading', true);
      try {
        const response = await axios.get(`${apiURL}/products`);
        const { results } = response.data;
        if (Array.isArray(results)) {
          context.commit('setProducts', results);
        } else {
          throw new Error('');
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
        context.commit('setError', e.message);
      } finally {
        context.commit('setLoading', false);
      }
    },
    async fetchUsers(context) {
      context.commit('setLoading', true);
      try {
        const { results } = await (await axios.get(`${apiURL}/users`)).data;
        if (Array.isArray(results)) {
          context.commit('setUsers', results);
        } else {
          console.error('Unexpected API response:', results);
          context.commit('setUsers', []);
          context.commit('setError', 'Failed to fetch users');
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
        context.commit('setError', e.message);
      } finally {
        context.commit('setLoading', false);
      }
    },
    async fetchCart(context) {
      context.commit('setLoading', true);
      try {
        const response = await axios.get(`${apiURL}/cart`);
        const { results } = response.data;
        if (Array.isArray(results)) {
          context.commit('setCart', results);
        } else {
          throw new Error('');
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
        context.commit('setError', e.message);
      } finally {
        context.commit('setLoading', false);
      }
    },
    sortByPrice({ commit }) {
      commit('sortByPrice');
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    sortByName({ commit }) {
      commit('sortByName');
    }
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
    }
  }
});
