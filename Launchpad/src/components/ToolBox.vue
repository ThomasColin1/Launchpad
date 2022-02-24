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

        <Instrument
          v-for="link in instrumentsList"
          :key="link.title"
          v-bind="link"
          @instrumentChoice="InstrumentChoice"
        />

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
import Instrument from "./Instrument.vue";
import { ListAudios } from "./ListAudios";
import {Data} from "./Data";

@Component({
  components: {
    Instrument,
  }
})
export default class ToolBox extends Vue{
  public arbre: Array<{label : string, children: Array<{label: string}>}> = ListAudios();
  public instrumentChoisi = null;
  public instrumentsList = [ //List of instruments


  {
    title: '1 - Classic Drums',
    caption: '',
    icon: 'fas fa-drum',
    link: ''
  },
  {
    title: '2 - Samples',
    caption: '',
    icon: 'album',
    link: ''
  }
];

  @Prop() readonly data!: Data;
  @Emit("instrumentChoice")
  InstrumentChoice(e:any) { //Sends chosen instrument to App
    return(e);
  }
  sendInstrument(){
    alert(this.instrumentChoisi);
    if(this.instrumentChoisi!=null){
      this.data.instrumentSelected=this.instrumentChoisi;
    }
    else{
      this.data.instrumentSelected="";
    }
  }
}
</script>
