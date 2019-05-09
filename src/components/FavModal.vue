<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-row
          justify-content-between
          align-items-center
        >
          <ion-col size="auto">
            <ion-title>Add your 3 favourite cars</ion-title>
          </ion-col>
          <ion-col size="auto">
            <ion-button @click="closeModal">
              <i class="fas fa-times    " />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <ion-label
          :color="errors.indexOf('customerName')>= 0 ? 'danger' : 'primary'"
          position="stacked"
        >
          Your name
        </ion-label>
        <ion-input
          :value="customerName"
          @input="customerName = $event.target.value"
        />
      </ion-item>
      <ion-label>
        <p
          padding
          class="text-left"
        >
          Your 3 Favorite Cars
        </p>
      </ion-label>
      <ion-item>
        <ion-label
          :color="errors.indexOf('carA')>= 0 ? 'danger' : 'primary'"
          position="stacked"
        >
          Enter Car 1 ...
        </ion-label>
        <ion-input
          :value="carA"
          @input="carA = $event.target.value"
        />
      </ion-item>
      <ion-item>
        <ion-label
          :color="errors.indexOf('carB')>= 0 ? 'danger' : 'primary'"
          position="stacked"
        >
          Enter Car 2 ...
        </ion-label>
        <ion-input
          :value="carB"
          @input="carB = $event.target.value"
        />
      </ion-item>
      <ion-item>
        <ion-label
          :color="errors.indexOf('carC')>= 0 ? 'danger' : 'primary'"
          position="stacked"
        >
          Enter Car 3 ...
        </ion-label>
        <ion-input
          :value="carC"
          @input="carC = $event.target.value"
        />
      </ion-item>
      <ion-row justify-content-end>
        <ion-button @click="insertRequest">
          Mark my words!
        </ion-button>
      </ion-row>
    </ion-content>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
import axios from "axios"
import {sleep} from "../utils"

@Component
export default class FavModal extends Vue {
  @Prop() title: string = "Super Modal";

  private errors: string[] = []

  private customerName = "";

  private carA = "";

  private carB = "";

  private carC = "";

  content = "Content"

  closeModal () {
    this.$ionic.modalController.dismiss("closed without adding ...")
  }

  async insertRequest ()  {
    this.errors = []
    if (!this.customerName) {this.errors.push("customerName")}
    if (!this.carA) {this.errors.push("carA")}
    if (!this.carB) {this.errors.push("carB")}
    if (!this.carC) {this.errors.push("carC")}

    if (this.errors.length > 0) {
      const toast = await this.$ionic.toastController.create({
        message: "Enter valid details and try again!",
        duration: 2000,
        showCloseButton: true
      })
      toast.present()
      return false
    }
    sleep(100)
    const loader = await this.$ionic.loadingController.create({
      message: "Adding your favourite ..."
    })
    loader.present()

    const {data} = await axios.post("/", {
      customerName: this.customerName,
      carA: this.carA,
      carB: this.carB,
      carC: this.carC
    })
    loader.dismiss()
    this.$ionic.modalController.dismiss(data.why)
  }

}
</script>
