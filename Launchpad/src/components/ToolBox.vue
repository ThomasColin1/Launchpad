<template>
<q-drawer
      v-model="leftDrawerOpen"
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

const soundList = [
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
    const leftDrawerOpen = ref(true)

    return {
      instrumentsList: soundList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    InstrumentChoice(e:any){
      this.$emit("instrument-choice",e);
    }
  }
}
</script>
