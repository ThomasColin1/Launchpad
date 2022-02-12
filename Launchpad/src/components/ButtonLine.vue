<template>
  <q-btn col="0" :ln=ln id="10" />
  <q-btn col="1" :ln=ln />
  <q-btn col="2" :ln=ln />
  <q-btn col="3" :ln=ln />
  <q-btn col="4" :ln=ln />
  <q-btn col="5" :ln=ln />
  <q-btn col="6" :ln=ln />
  <q-btn col="7" :ln=ln />
</template>
<!-- col > ln -->


<script lang="ts">

  export default {
    props: {
      ln:{
        type: String,
        required: true,
        default: '0'
      }
    },
    name: "ButtonLine",
    setup(){
    }
  }
</script>
