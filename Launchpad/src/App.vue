
<template>
<q-layout view="lHh Lpr lFf">


    <ToolBox />

    <q-page-container>
      <ToolBar />
      <Launchpad />
    </q-page-container>
  </q-layout>

  <!--<router-view />-->
  <!--<q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <ToolBar/>
      <ToolBox />
    </q-header>
    <Launchpad/>
  </q-layout>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <ToolBar />
    </q-header>

    <ToolBox />

    <q-page-container>
      <Launchpad />
    </q-page-container>
  </q-layout>-->
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import ToolBar from "./components/ToolBar.vue";
import ToolBox from "./components/ToolBox.vue";
import Launchpad from "./components/Launchpad.vue";

import MainLayout from "./layouts/MainLayout.vue";

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
    ToolBox,
    Launchpad,
    MainLayout
  }
})
</script>
