<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-row
          justify-content-between
          align-items-center
        >
          <ion-col size="auto">
            <ion-title>{{ title }}</ion-title>
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
      d
    </ion-content>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator"
@Component
export default class FavModal extends Vue {
  @Prop() title: string = "Super Modal";

  content = "Content"

  closeModal () {
    this.$ionic.modalController.dismiss("hi")
  }

}
</script>
