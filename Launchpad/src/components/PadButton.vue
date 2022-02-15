<template>
  <q-btn :col=col :ln=ln :id=id :pad=pad v-on:click="playAudio()"  />
</template>
<!-- col > ln -->


<script lang='ts'>

  export default{
    name: "PadButton",
    setup(){

    },
    props: {
      ln:{
        type: String,
        required: true,
        default: '0'
      },
      col:{
        type: String,
        required: true,
        default: '0'
      },
      id:{
        type: String,
        required: true,
        default: '0'
      },
      pad:{
        type: String,
        required: false,
        default: 'Drums'
      },
      personnalisable:{
        type: String,
        required: false,
        default: '0'
      }
    },
    methods: {
      playAudio: function(){
        if(this.personnalisable=="0"){
          var audio = new Audio(require("../assets/"+this.pad+"/"+this.id+".wav"));
          audio.play();

        }else{
          var audio = new Audio(require("../assets/"+this.pad+".wav"));
          audio.play();
        }

      }
    }
  }
</script>
