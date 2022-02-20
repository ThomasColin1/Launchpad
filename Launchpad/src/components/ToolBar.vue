<template>
    <q-toolbar class="bg-black text-white shadow-2 rounded-borders" >
      <q-btn flat label="Reset" id="reset" v-on:click="ResetEmitter()"/>
    </q-toolbar>
</template>

<script lang="ts">
export default {
  name: "ToolBar",
  methods : {
    ResetEmitter(e:any){ //Sends reset order to App
      this.$emit("reset");
    }
  }
}
</script>
