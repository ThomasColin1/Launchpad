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
import {Component, Prop, Vue, Emit} from "vue-property-decorator"
@Component
export default class Instrument extends Vue{

  @Prop(String) readonly title!: String
  @Prop(String) readonly caption!: String
  @Prop(String) readonly link!: String
  @Prop(String) readonly icon!: String

  @Emit("instrumentChoice")
  emitter() { //Sends chosen instrument to App
    return(this.title);
  }
}
</script>
