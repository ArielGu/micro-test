import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// export default new (Vue.extend(App))({
  // propsData: {
  //   steps: stepsConfig,
  // },
  // store: this,
// }).$mount();

console.log(Vue.$data)
export default new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store: this.$root.$data.store,
  components: { App },
  template: `
    <div class="app">
      <app />
    </div>
  `
})