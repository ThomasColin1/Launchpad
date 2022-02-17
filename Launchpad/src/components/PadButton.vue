<template>
  <q-btn :col=col :ln=ln :id=id :pad=pad v-on:click="playAudio()" @contextmenu="updateLoopColor()"  >
    <!-- <q-icon name="loop" color="grey" :style="loopIcon" /> -->
    <q-menu :context-menu="true" class="q-pa-md">
      <p style="text-align:center;">Volume : </p>
      <q-slider v-model="volume" :min="0" :max="100" style="width:200px" />
      <br/>
      <div style="line-height:40px;">
      <q-btn v-on:click="stopAudio()" style="top:50%; left:50%; transform: translateX(-50%);"> stop </q-btn>
      <br/>
      <q-btn v-on:click="loopAudio()" style="top:50%; left:50%; transform: translateX(-50%);" :id="'Loop '+id" :color="loopColor" > loop </q-btn>
      <br/>
      </div>

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
        audio : [new Audio(), new Audio(),new Audio(),new Audio(),new Audio()],
        loopColor : "primary",
        //loopIcon : "display : none"
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
        this.audio[numPad].loop = !this.audio[numPad].loop;
        this.updateLoopColor();
      },
      updateLoopColor: function(){
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        if(this.audio[numPad].loop){
          this.loopColor="secondary";
          //this.loopIcon="display:block";
        }else{
          this.loopColor="primary";
          //this.loopIcon="display:none";
        }
        return this.loopColor;
      },
      ResetPad : function(){
        for (let i=0; i<this.audio.length;i++){
          this.audio[i].pause();
        }
      }
    }
  }
</script>
