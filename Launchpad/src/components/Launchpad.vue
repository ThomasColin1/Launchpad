
<template>
  <div class="q-pa-md">

    <div class="wrapper" id="PadWrapper">
      <template v-for="y in sizeY">
        <div v-for="x in sizeX">

          <PadButton
            ref="Padbutton"
            :ln=(y-1).toString()
            :col=(x-1).toString()
            :id=((x-1)+(y-1)*8).toString()
            class="PadElement"
            :pad=instrument
          />

        </div>
      </template>
    </div>

    <p
    style="text-align:center; font-family: 'Calibri', Times, sans-serif; font-size:18px">
    <br/>Actually selected : {{instrument}}
    <br/>Right-click on pad for options
    </p>

  </div>

</template>

<script lang="ts">
import PadButton from "./PadButton.vue";
export default {
    name: "Launchpad",
    data(){
      return{
        buttonNumber : 64, //To be able to change the pad size
        sizeX: 8,
        sizeY: 8,
      }
    },
    props: {
      instrument: { //The actual chosen pad
      type: String,
      required: true
      },
    },

  components: {
    PadButton,
  },

  methods: {
    Reset : function(){
      for (let i = 0; i < this.buttonNumber; i++) {
        this.$refs.Padbutton[i].ResetPad(); //Sends reset order to the pad buttons
      }
    }
  },
  setup(){
  }
}
</script>
