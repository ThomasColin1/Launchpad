<template>
	<q-btn
		:col="col"
		:ln="ln"
		:id="id"
		v-on:click="playAudio()"
	>
		<q-menu :context-menu="true" class="q-pa-md">
			<p style="text-align:center;">Volume :</p>
			<q-slider
				id="volume"
				v-model="volume"
				:min="0"
				:max="100"
				style="width:200px"
				v-on:click="changeVolume()"
			/>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { AudioService}  from "./AudioService"
import { Data } from "./Data"
import * as Tone from 'tone'
@Component
export default class PadButton extends Vue {
	@Prop(String) readonly ln!: string | "0";
	@Prop(String) readonly col!: string | "0";
	@Prop() readonly id!: number | 0;
  @Prop(AudioService) readonly audio!: AudioService;
  @Prop() readonly data!: Data;

	public volume: number = 50; //Origin volume
	private loopColor: String = "primary"; //Color of the loop button
  public player: any;

	mounted() {
		//Charge sounds when mounted and not on click, for no latency
    this.audio.addAudio(this.id ,require("../assets/1 - Classic Drums/1.mp3"));
		/*try {
			//verify file existence
			this.audio[0] = new Audio(
				require("../assets/" + "1 - Classic Drums" + "/" + this.id + ".mp3")
			);
		} catch (error) {
			console.log(
				"../assets/" + "1 - Classic Drums" + "/" + this.id + ".mp3  :  not loaded"
			);
		}
		this.audio[0].volume = 0.5;

		try {
			this.audio[1] = new Audio(
				require("../assets/" + "2 - Samples" + "/" + this.id + ".mp3")
			);
		} catch (error) {
			console.log(
				"../assets/" + "2 - Samples" + "/" + this.id + ".mp3  :  not loaded"
			);
		}
		this.audio[1].volume = 0.5;*/
	}

	playAudio(e:any) {
		// Start sound at button click
    /*if(this.data.instrumentSelected== ""){
      this.audio.playAudio(this.id);
    }else{
      alert(this.data.instrumentSelected)
      this.audio.addAudio(this.id, "../assets/Lofi/"+this.data.instrumentSelected)
    }*/
		//To be implemented
	}
	stopAudio() {
		//Stops sounds at click on stop button
    this.audio.stopAudio(this.id);
	}
	loopAudio() {
		//Change loop state when click on loop
    let loopState = this.audio.loopAudio(this.id);
		this.updateLoopColor(loopState);
	}
	updateLoopColor(loopState : boolean) {
		//Change loop button color to differentiate when loop activated
		if (loopState) {
			this.loopColor = "secondary";
		} else {
			this.loopColor = "primary";
		}
		return this.loopColor;
	}
	changeVolume() {
		//Update volume slider when change pads
		this.audio.changeVolume(this.id, this.volume);
	}
	ResetPad() {
		//Stops all audios (looped or not)
		this.audio.reset();
	}
}
</script>
