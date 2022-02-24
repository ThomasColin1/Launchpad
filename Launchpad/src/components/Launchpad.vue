<template>
	<div class="q-pa-md">
		<div class="wrapper" id="PadWrapper">
			<template v-for="y in sizeY">
				<div v-for="x in sizeX">
					<PadButton
						ref="Padbutton"
						:ln="(y - 1).toString()"
						:col="(x - 1).toString()"
						:id="(x - 1 + (y - 1) * 8).toString()"
						class="PadElement"
						:pad="instrument"
					/>
				</div>
			</template>
		</div>

		<p
			style="text-align:center; font-family: 'Calibri', Times, sans-serif; font-size:18px"
		>
			<br />Actually selected : {{ instrument }} <br />Right-click on pad for
			options
		</p>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from "vue-property-decorator";
import PadButton from "./PadButton.vue";

@Component({
	components: {
		PadButton
	}
})
export default class Launchpad extends Vue {
	private buttonNumber = 64;
	public sizeX = 8;
	public sizeY = 8;

	@Prop(String) readonly instrument!: string | "0";

	@Ref() Padbutton!: PadButton[];
	Reset() {
		for (let i = 0; i < this.buttonNumber; i++) {
			this.Padbutton[i].ResetPad(); //Sends reset order to the pad buttons
		}
	}
}
</script>
