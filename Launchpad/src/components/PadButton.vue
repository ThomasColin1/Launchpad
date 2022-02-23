<template>
  <q-btn :col=col :ln=ln :id=id :pad=pad v-on:click="playAudio()"  @contextmenu="updateLoopColor(); updateVolume();" >
    <q-menu :context-menu="true" class="q-pa-md">
      <p style="text-align:center;">Volume : </p>
      <q-slider id="volume" v-model="volume" :min="0" :max="100" style="width:200px" v-on:click="changeVolume()" />
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


<script lang='ts'>
  export default{
    name: "PadButton",
    data(){
      return{
        volume: 50, //Origin volume
        audio : [new Audio(), new Audio(),new Audio(),new Audio(),new Audio()], //Audios of all the pads
        loopColor : "primary", //Color of the loop button
      }
    },
    setup(){
    },
    mounted(){ //Charge sounds when mounted and not on click, for no latency
    console.log(this.id);
      try{ //verify file existence
      this.audio[0] = new Audio(require("../assets/"+"1 - Classic Drums"+"/"+this.id+".mp3"));
      }catch(error){
        console.log("../assets/"+"1 - Classic Drums"+"/"+this.id+".mp3  :  not loaded");
      }
      this.audio[0].volume = 0.5;

      try{
      this.audio[1] = new Audio(require("../assets/"+"2 - Samples"+"/"+this.id+".mp3"));
      }catch(error){
        console.log("../assets/"+"2 - Samples"+"/"+this.id+".mp3  :  not loaded");
      }
      this.audio[1].volume = 0.5;
    },
    props: {
      ln:{ //Line number of pad button
        type: String,
        required: true,
        default: '0'
      },
      col:{ //Column number of pad button
        type: String,
        required: true,
        default: '0'
      },
      id:{
        type: String,
        required: true,
        default: '0'
      },
      pad:{ //The actual launchpad used
        type: String,
        required: false,
        default: 'Drums'
      },
    },
    methods: {
      playAudio: function(){ // Start sound at button click
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
          console.log("play "+this.id);
          this.audio[numPad].pause();
          this.audio[numPad].currentTime=0;
          this.audio[numPad].play();
          //To be implemented
        },
      stopAudio: function(){ //Stops sounds at click on stop button
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        this.audio[numPad].pause();
      },
      loopAudio: function(){ //Change loop state when click on loop
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        this.audio[numPad].play();
        this.audio[numPad].loop = !this.audio[numPad].loop;
        this.updateLoopColor();
      },
      updateLoopColor: function(){ //Change loop button color to differenciate when loop activated
          var numPadS = this.pad.charAt(0);
          var numPad: number = parseInt(numPadS)-1;
        if(this.audio[numPad].loop){
          this.loopColor="secondary";
        }else{
          this.loopColor="primary";
        }
        return this.loopColor;
      },
      updateVolume: function(){ //Update volume slider when change pads
        var numPadS = this.pad.charAt(0);
        var numPad: number = parseInt(numPadS)-1;
        var vol = document.getElementById('volume');
        this.volume=Math.floor(this.audio[numPad].volume*100);
      },
      changeVolume: function(){ //Update sound volume when slider clicked
        var numPadS = this.pad.charAt(0);
        var numPad: number = parseInt(numPadS)-1;
        this.audio[numPad].volume = this.volume/100.0;
      },
      ResetPad : function(){ //Stops all audios (looped or not)
        for (let i=0; i<this.audio.length;i++){
          this.audio[i].pause();
        }
      }
    }
  }
</script>
