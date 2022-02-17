
<template>
<q-layout view="lHh Lpr lFf">


    <ToolBox
    @instrument-choice="InstrumentChoice"
    />

    <q-page-container>
      <ToolBar
      @reset="Reset"
      />
      <Launchpad id="lnpad" :instrument=instrument ref="Launchpad" />
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
import Vue from 'vue';
import { defineComponent } from 'vue';
import ToolBar from "./components/ToolBar.vue";
import ToolBox from "./components/ToolBox.vue";
import Launchpad from "./components/Launchpad.vue";
import MainLayout from "./layouts/MainLayout.vue";
export default defineComponent({

  name: 'App',
  data(){

      return{
        instrument:'1 - Classic Drums'
      }
  },
  components: {
    ToolBar,
    ToolBox,
    Launchpad,
    MainLayout
  },

  methods: {
    test: function(e : String){
      //alert(e);
      switch(e){
        case "a": {
          const but = document.getElementById('0');
          but!.click();
          break;
        }
        case "z": {
          const but = document.getElementById('1');
          but!.click();
          break;
        }
        case "e": {
          const but = document.getElementById('2');
          but!.click();
          break;
        }
        case "r": {
          const but = document.getElementById('3');
          but!.click();
          break;
        }
        case "t": {
          const but = document.getElementById('4');
          but!.click();
          break;
        }
        case "y": {
          const but = document.getElementById('5');
          but!.click();
          break;
        }
        case "u": {
          const but = document.getElementById('6');
          but!.click();
          break;
        }
        case "i": {
          const but = document.getElementById('7');
          but!.click();
          break;
        }
      }

    },
      InstrumentChoice: function(e: String){

        this.instrument=e;

      },
      Reset: function(){
        alert('a');
        this.$refs.Launchpad.Reset();

      }
  },
  created: function () {

          window.addEventListener('keypress', (event)=>this.test(event.key));
                }
  })
;
</script>
