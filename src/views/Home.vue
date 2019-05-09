<template>
  <div>
    <app-header :reload-cars="loadCars" />
    <ion-row>
      <ion-col
        v-for="car in favCars"
        :key="car.customerName"
        size="12"
        size-md="12"
        size-lg="3"
      >
        <app-fav-item

          :customer-name="car.customerName"
          :date="car.date"
          :time="car.time"
          :cars="car.cars"
        />
      </ion-col>
    </ion-row>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import FavouriteListItem from "@/components/FavouriteListItem.vue"
import AppHeader from "@/components/AppHeader.vue"
import axios from "axios"
import {sleep} from "@/utils"

@Component({
  components: {
    "app-fav-item": FavouriteListItem,
    "app-header": AppHeader
  }
})
export default class Home extends Vue {
  private favCars = []

  async mounted () {
    await sleep(100)
    await this.loadCars()
  }

  async loadCars () {
    const loader = await this.$ionic.loadingController.create({
      message: "Loading favourite ..."
    })
    loader.present()
    const {data: {data: favCars}} = await axios.get("?page=1")
    this.favCars = favCars
    loader.dismiss()

  }

}
</script>
