<template>
  <div id="app2">
    <img src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>Count: {{ count }}</div>
    <button v-on:click="increment"> local increment</button>
    <div>Global: {{ globalCount }}</div>
    <button v-on:click="globalDispatch"> global increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app2",
  components: {
    HelloWorld
  },
  computed: mapState({
    count () {
      return this.$store.state.count
    },
    globalCount() {
      return this.$root.$data.store.state.count;
    }
  }),
  methods: {
    ...mapActions(['increment']),

    // 总线程触发修改全局变量
    // app2 中 counter 增加，相应的 react 中获取全局的 count 也在增加
    globalDispatch() {
      return this.$root.globalEventDistributor.dispatch({ type: "INCREMENT" })
    }
  },
};
</script>

<style>
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
