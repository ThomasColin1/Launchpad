
<template>

  <!--<router-view />-->
  <ToolBar/>
  <Launchpad/>
</template>

<style lang="scss">
  @import "./css/app.scss";
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolBar from "./components/ToolBar.vue";
import ToolBox from "./components/ToolBox.vue";
import Launchpad from "./components/Launchpad.vue";


export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
    ToolBox,
    Launchpad
  }
})
</script>
