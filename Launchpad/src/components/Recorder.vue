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
    :id="idDelete"
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
  private idDelete:string = "DeleteButton none"+this.recordNumber.toString();
  private buttonColor:string = "black";
  private buttonIcon:string="fas fa-microphone";
  private displayDelete:string="none";

  mounted(){
    let self=this;

    setInterval(function() {
      //Auto-updates the buttons
      self.updateButton();
    }, 200);
  }

	startRecord() {
    this.audio.recordClick(this.recordNumber);
	}

  @Emit("deselectInstrument")
    deselectInstrument() {
      //Sends deselect order to the toolbox when sound has been assigned
      this.data.setInstrumentSelected("");
      return("deselectInstrument");
    }

	updateButton() {
		//Update the record and delete buttons display
    if(this.audio.getRecordState(this.recordNumber)==0){
      this.displayDelete="none";
      this.buttonColor="black";
      this.buttonIcon="fas fa-microphone";
    }else if(this.audio.getRecordState(this.recordNumber)==1){
      this.displayDelete="none";
      this.buttonColor="red";
      this.buttonIcon="fas fa-microphone";
    }else if(this.audio.getRecordState(this.recordNumber)==2){
      this.displayDelete="block";
      this.buttonColor="green";
      this.buttonIcon="fas fa-play";
    }else if(this.audio.getRecordState(this.recordNumber)==3){
      this.displayDelete="block";
      this.buttonColor="blue";
      this.buttonIcon="fas fa-stop";
    }else if(this.audio.getRecordState(this.recordNumber)==4){
      this.displayDelete="none";
      this.buttonColor="grey";
      this.buttonIcon="fas fa-microphone";
    }
    return this.buttonColor, this.buttonIcon, this.displayDelete;
	}

  deleteRecord(){
    //Deletes the record of a line
    this.audio.deleteRecord(this.recordNumber);
    this.displayDelete="none";
    this.buttonIcon="fas fa-microphone";
    this.buttonColor="black";

    return this.buttonColor, this.buttonIcon, this.displayDelete;
  }

}
</script>
