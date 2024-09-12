import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
  path: '/product/:id',
  name: 'SingleView',
  component: () => import('../views/SingleView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/reachUs',
    name: 'reachUs',
    component: () => import('../views/ReachUs.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path:'/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: () => import('../views/Ts&CsView.vue') 
  },
{
  path: '/warranty-and-repairs',
  name: 'WarrantyAndRepairs',
  component: () => import('../views/Warranty&RepairsView.vue') 
},
{
  path: '/loyalty-card',
  name: 'LoyaltyCard',
  component: () => import('../views/LoyaltyCard.vue')
},
{
  path: '/jewels-club',
  name: 'JewelsClub',
  component: () => import('../views/JewelsClub.vue')
},
{
  path: '/company-info',
  name: 'CompanyInfo',
  component: () => import('../views/CompanyInfo.vue')
},
{
  path: '/store-locator',
  name: 'StoreLocator',
  component: () => import('../views/StoreLocator.vue')
},
{
  path: '/delivery',
  name: 'Delivery',
  component: () => import('../views/DeliveryView.vue')
},
{
  path: '/returns',
  name: 'Returns',
  component: () => import('../views/ReturnsView.vue')
},
{
  path: '/size-guide',
  name: 'SizeGuide',
  component: () => import('../views/SizeGuide.vue')
},
{
  path: '/care-instructions',
  name: 'CareInstructions',
  component: () => import('../views/CareInstructions.vue')
},
{
  path: '/promotions',
  name: 'Promotions',
  component: () => import('../views/PromotionsView.vue')
},
{
  path: '/FAQ',
  name: 'FAQ',
  component: () => import('../views/FAQView.vue')
}

  // {
  //   path: '/product',
  //   name: 'ProductDetails',
  //   component: () => import('@/views/ProductDetails.vue') // Lazy loading the component
  // }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
