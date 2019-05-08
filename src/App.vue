<template>
  <ion-app id="app">
    <app-header />
    <ion-content>
      <router-view />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
import AppHeader from "@/components/AppHeader.vue"

@Component({
  components: {
    "app-header": AppHeader
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
