
<template>
  <div class="q-pa-md">
    <div class="wrapper" id="PadWrapper">
      <div v-for="b in buttons">
        <PadButton ref="Padbutton" :ln=b.ln :col=b.col :id=b.id :class=b.class :pad=instrument :personnalisable="0"  />

      </div>

    </div>
    <p style="text-align:center"><br/>-----{{instrument}}------</p>
  </div>

</template>

<script>
import PadButton from "./PadButton.vue";
export default {
    name: "Launchpad",
    props: {
      instrument: {
      type: String,
      required: true
      },
    },
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

  components: {
    PadButton,
  },
  methods: {
    Reset : function(){
      alert('aa');
      this.$refs.Padbutton.ResetPad();
    }
  },
  setup(){
  }
}
</script>
