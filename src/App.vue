<template>
  <ion-app id="app">
    <ion-content>
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"

@Component
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fas ~ *{
  padding-left: 3px;
}
</style>
