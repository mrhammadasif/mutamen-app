<template>
  <div>
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
import axios from "axios"

@Component({
  components: {
    "app-fav-item": FavouriteListItem
  }
})
export default class Home extends Vue {
  private favCars = []

  async mounted () {
    const loader = await this.$ionic.loadingController.create({
      message: "Loading Favourites..."
    })
    loader.present()
    const {data: {data: favCars}} = await axios.get("?page=1")
    this.favCars = favCars
    loader.dismiss()
  }

}
</script>
