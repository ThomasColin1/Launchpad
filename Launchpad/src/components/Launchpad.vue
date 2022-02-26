<template>
	<div class="q-pa-md">
		<div class="wrapper" id="PadWrapper">
			<template v-for="y in launchpadSizeY">
				<div v-for="x in launchpadSizeX" >
					<PadButton
						:id="(x - 1 + (y - 1) * 8)"
						ref="Padbutton"
						class="PadElement"
            :audio="audioService"
            :data="data"
            @deselectInstrument="deselectInstrument()"
					/>
				</div>
			</template>
		</div>

		<p
			class="text-center text-body1"
		>
			<br />Right-click on pad for options
      <br />Select instrument and click on pad to assign
      <br />Color code : <span class="text-red">Red</span> : unassigned ---- <span class="text-blue">Blue</span> : assigned ---- <span class="text-green">Green</span> : looped
		</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref, Emit } from "vue-property-decorator";
import PadButton from "./PadButton.vue";
import { AudioService } from "./AudioService";
import {Data} from "./Data";


@Component({
	components: {
		PadButton
	}
})
export default class Launchpad extends Vue {

	@Prop(String) readonly instrument!: string | "0";
  @Prop() readonly data!: Data;

  private buttonNumber = this.data.getButtonNumber();
  private launchpadSizeX = this.data.getLaunchpadSizeX();
  private launchpadSizeY = this.data.getLaunchpadSizeY();
  private audioService = new AudioService(this.buttonNumber);

	@Ref() Padbutton!: PadButton[];

	reset() {
		for (let i = 0; i < this.buttonNumber; i++) {
			this.Padbutton[i].resetPad(); //Sends reset order to the pad buttons
		}
	}

  @Emit("deselectInstrument")
    deselectInstrument() { //Sends deselection order to the App
      return("deselectInstrument");
  }

}
</script>
