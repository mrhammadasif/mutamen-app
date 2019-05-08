<template>
  <a href="#">{{ car }}</a>
</template>

<script>
export default {
  props: {
    car: {
      type: String,
      default: "unknown"
    }
  }
}
</script>

<style>

</style>
