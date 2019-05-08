<template>
  <ion-card>
    <ion-card-content>
      Our customer <strong>{{ customerName }}</strong> said at <span>{{ time }}</span> on <span>{{ date }}</span> that he loves
      <app-fav-car
        :car="cars[0]"
      />,
      <app-fav-car
        :car="cars[1]"
      /> and
      <app-fav-car
        :car="cars[2]"
      />
    </ion-card-content>
  </ion-card>
</template>

<style lang="scss" scoped>
ion-content {
  text-align: justify;
}
span {
  color: #aaa;
  font-style: italic;
}
</style>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import AppFavCar from "@/components/AppFavCar.vue"
@Component({
  components: {
    "app-fav-car": AppFavCar
  },
  props: {
    time: {
      type: String
    },
    date: {
      type: String
    },
    customerName: {
      type: String
    },
    cars: {
      type: Array,
      default: [
        "car a",
        "car b",
        "car c"
      ]
    }
  }
})
export default class extends Vue {

}
</script>
