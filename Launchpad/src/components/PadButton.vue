<template>
  <q-btn :col="col" :ln=ln :id=id />
</template>
<!-- col > ln -->


<script lang="ts">

  export default {
    props: {
      ln:{
        type: String,
        required: true,
        default: '0'
      },
      col:{
        type: String,
        required: true,
        default: '0'
      },
      id:{
        type: String,
        required: true,
        default: '00'
      }
    },
    name: "PadButton",
    setup(){
    }
  }
</script>
