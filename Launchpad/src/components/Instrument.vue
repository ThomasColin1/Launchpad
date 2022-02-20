<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    v-on:click="emitter()"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />

    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Instrument',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    }, //For later use, description of the instrument

    link: {
      type: String,
      default: '#'
    }, //For later use if links implemented in toolBox

    icon: {
      type: String,
      default: ''
    }
  },
  methods:{
    emitter(event:any){ //Sends the instrument choice to App
      this.$emit("instrument-choice",this.title);
    }
  }
})
</script>
