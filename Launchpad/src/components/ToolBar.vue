<template>
    <q-toolbar class="bg-black text-white shadow-2 rounded-borders" >
      <q-btn flat label="Reset" id="reset" v-on:click="ResetEmitter()"/>
    </q-toolbar>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator"
@Component
export default class ToolBar extends Vue{

    @Emit('reset')
    ResetEmitter() { //Sends reset order to the App
      return("reset");
    }
}
</script>
