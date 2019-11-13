export default [
  {path: '/', name: 'index', redirect: "/index"},
  {path: '/index', name: 'Index', component(resolve) {require(['../views/index/Index.vue'], resolve)}},
];
