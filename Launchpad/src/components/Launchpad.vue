
<template>
  <div class="q-pa-md">
    <div class="wrapper" id="PadWrapper">
      <div v-for="b in buttons">
        <q-btn :ln=b.ln :col=b.col :id=b.id :class=b.class v-on:click="myFunction(b.id)"></q-btn>
      </div>
    </div>
  </div>

</template>

<script>
import PadButton from "./PadButton.vue";
export default {
    name: "Launchpad",
  computed: {
    buttons: function(){
      var BUT = [];
      let ln=0;
      let col=0;
      for (let i = 0; i < 64; i++) {
          let newBut = {
            id:i.toString(),
            ln:Math.floor(i/8.0).toString(),
            col:i%8.0.toString(),
            class:"PadElement"
          };
          BUT.push(newBut);
      }
      return BUT;
    }

  },
  methods: {
    myFunction: function(ButtonId){

        var Son = "Drums";
        var audio = new Audio(require("../assets/"+Son+"/"+ButtonId+".wav"));
        audio.play();

    }
  },
  components: {
    PadButton,
  },
  setup(){
  }
}
</script>
