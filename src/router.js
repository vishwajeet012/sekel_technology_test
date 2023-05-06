import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Folder from './components/Folder.vue';

const routes = [
  { path: '/', redirect: '/folder/0' },
  { path: '/folder/:id', component: TodoList, props: true },
  { path: '/folders', component: Folder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
