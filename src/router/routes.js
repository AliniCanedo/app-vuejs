/*eslint-disable prettier/prettier*/
const routes = [
  { path: '/', name: 'home', component: () => import('../pages/IndexPage.vue') },
  { path: '/contact/:id?', name: 'contact', component: () => import('../pages/FormPage.vue') },
]

export default routes