<template>
	<q-btn
		:col="col"
		:ln="ln"
		:id="id"
    :state="btnColor"
		v-on:click="padClick()"
	>
		<q-menu :context-menu="true" class="q-pa-md">
			<p class="text-center">Volume :</p>
      <template

      >
			<q-slider
				id="volume"
				v-model="volume"
				:min="0"
				:max="100"
				style="width:200px"
        @change="changeVolume()"
			/>
      </template>
			<br />
			<div style="line-height:40px;">
				<q-btn
					v-on:click="stopAudio()"
					style="top:50%; left:50%; transform: translateX(-50%);"
				>
					stop
				</q-btn>
				<br />
				<q-btn
					v-on:click="loopAudio()"
					style="top:50%; left:50%; transform: translateX(-50%);"
					:id="'Loop ' + id"
					:color="loopColor"
				>
					loop
				</q-btn>
				<br />
			</div>
		</q-menu>
	</q-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { AudioService}  from "./AudioService"
import { Data } from "./Data"
import * as Tone from 'tone'
@Component
export default class PadButton extends Vue {

	@Prop() readonly id!: number;
  @Prop(AudioService) readonly audio!: AudioService;
  @Prop() readonly data!: Data;

	private volume: number = 50; //Origin volume
	private loopColor: string = "primary"; //Color of the loop button
  private btnColor: string = "0"; //Color of the pad button
  private ln: string = (Math.trunc(this.id/8)).toString(); //number of line, for styling the q-btn
  private col: string = (this.id%8).toString(); //number of column, for styling the q-btn

	padClick() {
		// Start sound if pad assigned
    // Select sound if pad unassigned and instrument selected
    // Make pad unassigned if instrument selected is Eraser

    if(this.data.getInstrumentSelected()==""){
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
    }
	}

  @Emit("deselectInstrument")
    deselectInstrument() {
      //Sends deselect order to the toolbox when sound has been assigned
      this.data.setInstrumentSelected("");
      return("deselectInstrument");
    }

	stopAudio() {
		//Stops sounds at click on stop button
    this.audio.stopAudio(this.id);
	}

	loopAudio() {
		//Change loop state when click on loop
    if(this.audio.getState(this.id)!=0){
      this.audio.loopAudio(this.id);
      this.updateColor();
    }
	}

	updateColor() {
		//Update the loop and pad colors
    let state = this.audio.getState(this.id);
    this.btnColor=state.toString();
		if (state == 2) {
			this.loopColor = "secondary";
		} else {
			this.loopColor = "primary";
		}
		return this.loopColor, this.btnColor;
	}

	changeVolume() {
		//Update volume when action on slider
		this.audio.changeVolume(this.id, this.volume);
	}

	resetPad() {
		//Stops all audios, resets colors and volumes
		this.audio.reset();
    this.updateColor();
    this.volume=50;
	}
}
</script>
