import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import MapView from '../views/MapView.vue'
import RecruitmentView from '../views/RecruitmentView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import CompleteView from '../views/CompleteView.vue'
import BillDetailView from '../views/BillDetailView.vue'
import { ElLoading } from 'element-plus'
import test from '../views/test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gioi-thieu',
    name: 'about',
    component: AboutView,

  },
  {
    path: '/lien-he',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView
  },
  {
    path: '/tuyen-dung',
    name: 'Recruitment',
    component: RecruitmentView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/complete',
    name: 'Complete',
    component: CompleteView
  },
  {
    path: '/bill-detail',
    name: 'BillDetail',
    component: BillDetailView
  },
  {
    path: '/detail/:productId',
    name: 'Detail',
    component: ProductDetailView,
    props: true,
  },
  {
    path: '/dang-tranh',
    name: 'Test',
    component: test
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Đang tải...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
    next()
  }, 500)
})

export default router
