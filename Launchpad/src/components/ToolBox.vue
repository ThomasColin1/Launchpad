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
          @instrument-choice="InstrumentChoice"
        />
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { ref } from 'vue';
import Instrument from "./Instrument.vue";

const soundList = [ //List of instruments
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

export default {
  name: "ToolBox",
  components: {
    Instrument,
  },

  setup () {

    return {
      instrumentsList: soundList,
    }
  },
  methods: {
    InstrumentChoice(e:any){
      this.$emit("instrument-choice",e); //Sends chosen instrument to App
    }
  }
}
</script>
