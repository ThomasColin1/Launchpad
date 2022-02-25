<template>
<q-drawer
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Options
        </q-item-label>

        <div class="q-pa-md q-gutter-sm" @click="sendInstrument()">
    <q-tree
      :nodes="arbre"
      node-key="label"
      :selected.sync = "instrumentChoisi"
    />
  </div>

    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import {Component, Prop,Emit, Vue} from "vue-property-decorator"
import { listAudios } from "./ListAudios";
import {Data} from "./Data";
import * as Tone from 'tone'

@Component
export default class ToolBox extends Vue{
  public arbre: Array<{label : string, children: Array<{label: string}>}> = listAudios();
  public instrumentChoisi = "";
  public player : Tone.Player = new Tone.Player();

  @Prop() readonly data!: Data;
  @Emit("instrumentChoice")
  InstrumentChoice(e:any) { //Sends chosen instrument to App
    return(e);
  }
  deselectInstrument(){
    this.instrumentChoisi="";
    this.player.stop();
  }
  sendInstrument(){
    if(this.instrumentChoisi!=null){
      this.data.setInstrumentSelected(this.instrumentChoisi);

      if(this.instrumentChoisi!="Erase" && this.instrumentChoisi.includes(".")){
        this.player = new Tone.Player(require("../assets/Lofi/"+this.data.getInstrumentSelected())).toDestination();
        Tone.loaded().then(() => {
          this.player.volume.value = -20;
          this.player.start();
        });
      }

    }else{
      this.data.setInstrumentSelected("");
      this.player.stop();
    }
  }
}
</script>
