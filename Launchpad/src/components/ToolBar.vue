<template>
    <q-toolbar class="bg-black text-white shadow-2 rounded-borders" >
      <q-btn flat label="Reset" id="reset" v-on:click="ResetEmitter()"/>
    </q-toolbar>
</template>

<script lang="ts">
import {Component, Emit, Vue, Prop} from "vue-property-decorator"
import {Data} from "./Data";
@Component
export default class ToolBar extends Vue{

  @Prop() readonly data!: Data;
    @Emit('reset')
    ResetEmitter() { //Sends reset order to the App
      this.data.reset();
      return("reset");


    }
}
</script>
