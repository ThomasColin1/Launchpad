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
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator"
import Instrument from "./Instrument.vue";



@Component({
  components: {
    Instrument,
  }
})
export default class ToolBox extends Vue{

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
  @Emit("instrumentChoice")
  InstrumentChoice(e:any) { //Sends chosen instrument to App
    return(e);
  }
}
</script>
