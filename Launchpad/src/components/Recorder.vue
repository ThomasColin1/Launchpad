<template>
<div class="RecordGrid">
	<q-btn
		:recordNumber="recordNumber"
    :id="idButton"
    class="RecordPad"
		v-on:click="startRecord()"
    :style="'color:'+buttonColor" >
  <i :class="buttonIcon" style="font-size:25px;" />
	</q-btn>
  <q-btn
		:recordNumber="recordNumber"
    :id="'Delete '+idButton"
    class="DeletePad"
		v-on:click="deleteRecord()"

    :style="'color:red; display:'+displayDelete" >
  <i class="fas fa-dumpster" style="font-size:25px;" />
	</q-btn>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Ref } from "vue-property-decorator";
import { AudioService}  from "./AudioService"
import { Data } from "./Data"

@Component
export default class Recorder extends Vue {

	@Prop() readonly recordNumber!: number;
  @Prop(AudioService) readonly audio!: AudioService;
  @Prop() readonly data!: Data;

  private idButton:string = "RecordButton "+this.recordNumber.toString();
  private buttonColor:string = "black";
  private buttonIcon:string="fas fa-microphone";
  private displayDelete:string="none";

	startRecord() {
		// Start sound if pad assigned
    // Select sound if pad unassigned and instrument selected
    // Make pad unassigned if instrument selected is Eraser

    /*if(this.data.getInstrumentSelected()==""){
      if(this.audio.getState(this.id)!=0){
        this.audio.playAudio(this.id);
      }
    }else if (this.data.getInstrumentSelected()=="Erase"){
      this.audio.stopAudio(this.id);
      this.audio.erase(this.id);
      this.updateColor();
    }else if (this.data.getInstrumentSelected().includes(".")){
      this.audio.addAudio(this.id, require("../assets/Lofi/"+this.data.getInstrumentSelected()))
      this.updateColor();
      this.deselectInstrument();
    }*/
    this.audio.recordClick(this.recordNumber);
    this.updateButton();

	}

  @Emit("deselectInstrument")
    deselectInstrument() {
      //Sends deselect order to the toolbox when sound has been assigned
      this.data.setInstrumentSelected("");
      return("deselectInstrument");
    }

	updateButton() {
		//Update the loop and pad colors
    if(this.audio.getRecordState(this.recordNumber)==0){
      this.buttonColor="black";
      this.buttonIcon="fas fa-microphone";
    }else if(this.audio.getRecordState(this.recordNumber)==1){
      var pdbtn=document.getElementById(this.idButton);
      this.buttonColor="red";
      this.buttonIcon="fas fa-microphone";
    }else if(this.audio.getRecordState(this.recordNumber)==2){
      this.displayDelete="block";
      this.buttonColor="green";
      this.buttonIcon="fas fa-play";

    }else if(this.audio.getRecordState(this.recordNumber)==3){
      var pdbtn=document.getElementById(this.idButton);
      this.buttonColor="blue";
      this.buttonIcon="fas fa-stop";
    }
    return this.buttonColor, this.buttonIcon, this.displayDelete;
	}

  deleteRecord(){
    this.audio.deleteRecord(this.recordNumber);
    this.displayDelete="none";
    this.buttonIcon="fas fa-microphone";
    this.buttonColor="black";

    return this.buttonColor, this.buttonIcon, this.displayDelete;
  }

}
</script>
