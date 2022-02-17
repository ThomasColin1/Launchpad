<template>
  <q-btn :col=col :ln=ln :id=id :pad=pad v-on:click="playAudio()" >
    <q-menu :context-menu="true" class="q-pa-md">
      <p style="text-align:center;">Volume : </p>
      <q-slider v-model="volume" :min="0" :max="100" style="width:200px" v-on:click="stopAudio()" />
      <br/>
      <q-btn v-on:click="stopAudio()" style="top:50%; left:50%; transform: translateX(-50%)"> stop </q-btn>
      <br/>
      <q-btn v-on:click="loopAudio()" style="top:50%; left:50%; transform: translateX(-50%)"> loop </q-btn>
      <br/>

    </q-menu>
  </q-btn>
</template>
<!-- col > ln -->


<script lang='ts'>

  export default{
    name: "PadButton",
    data(){
      return{
        volume: 50,
        audio : [new Audio(), new Audio(),new Audio(),new Audio(),new Audio()]

      }
    },
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
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        if(this.personnalisable=="0"){

          this.audio[numPad].pause();
          this.audio[numPad] = new Audio(require("../assets/"+this.pad+"/"+this.id+".wav"));
          this.audio[numPad].volume = this.volume/100.0;
          this.audio[numPad].play();
        }else{

          this.audio[numPad].pause();
          this.audio[numPad] = new Audio(require("../assets/"+this.pad+".wav"));
          this.audio[numPad].play();
        }
        },
      stopAudio: function(){
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        this.audio[numPad].pause();
      },
      loopAudio: function(){
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        this.audio[numPad].play();
        this.audio[numPad].loop = true;
      },
      ResetPad : function(){
        for (let i=0; i<this.audio.length;i++){
          this.audio[i].pause();
        }
      }
    }
  }
</script>
