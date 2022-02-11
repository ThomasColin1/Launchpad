
<template>
  <div class="q-pa-md">
    <div class="wrapper">
      <ButtonLine :ln="0"/>
      <ButtonLine :ln="1"/>
      <ButtonLine :ln="2"/>
      <ButtonLine :ln="3"/>
      <ButtonLine :ln="4"/>
      <ButtonLine :ln="5"/>
      <ButtonLine :ln="6"/>
      <ButtonLine :ln="7"/>
    </div>
  </div>
</template>

<script>
import ButtonLine from "./ButtonLine.vue";
export default {
    name: "Launchpad",
  components: {
    ButtonLine,
  }
}
</script>
