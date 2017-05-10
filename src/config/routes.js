
import App from '../app'
import Index from '../pages/index/'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        meta: { auth: false },
        component: Index
      }]}]
