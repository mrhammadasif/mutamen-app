<template>
  <ion-row
    align-items-center
    justify-content-between
  >
    <ion-col size="auto">
      <ion-row
        align-items-center
        justify-content-start
      >
        <ion-col>
          <ion-img :src="'/logo.svg'" />
        </ion-col>
        <ion-col size="auto">
          Favourite Cars of Mutamen Customers
        </ion-col>
      </ion-row>
    </ion-col>
    <ion-col size="auto">
      <ion-button @click="openReportFavCars">
        <i class="fas fa-plus" /> Report your Favourite Cars
      </ion-button>
    </ion-col>
  </ion-row>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import FavModal from "@/components/FavModal.vue"
import axios from "axios"
@Component
export default class extends Vue{

  async openReportFavCars () {

    const modal = await this.$ionic.modalController.create({
      component: FavModal
    })

    modal.present()

    const {data} = await modal.onDidDismiss()
    // we are calling new fav model from here
    // eslint-disable-next-line no-console
    console.log(data)
  }
}
</script>
