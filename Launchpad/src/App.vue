<template id="q-app">
	<q-layout view="lHh Lpr lFf">
		<ToolBox :data="data" ref="ToolBox" />

		<q-page-container>

			<ToolBar @reset="reset()" :data="data" />

			<Launchpad
				id="lnpad"
				ref="Launchpad"
				:data="data"
				@deselectInstrument="deselectInstrument()"
			/>

		</q-page-container>

	</q-layout>
</template>

<script lang="ts">
import { Component, Vue, Ref, Emit } from "vue-property-decorator";
import ToolBar from "./components/ToolBar.vue";
import ToolBox from "./components/ToolBox.vue";
import Launchpad from "./components/Launchpad.vue";
import { Data } from "./components/Data";

@Component({
	components: {
		ToolBar,
		ToolBox,
		Launchpad
	}
})
export default class App extends Vue {

	public data: Data = new Data();

	clavier(e: String) {
		//Make keyboard work for the first lines of the pad

		switch (e) {
			case "a": {
				const but = document.getElementById("0");
				but!.click();
				break;
			}
			case "z": {
				const but = document.getElementById("1");
				but!.click();
				break;
			}
			case "e": {
				const but = document.getElementById("2");
				but!.click();
				break;
			}
			case "r": {
				const but = document.getElementById("3");
				but!.click();
				break;
			}
			case "t": {
				const but = document.getElementById("4");
				but!.click();
				break;
			}
			case "y": {
				const but = document.getElementById("5");
				but!.click();
				break;
			}
			case "u": {
				const but = document.getElementById("6");
				but!.click();
				break;
			}
			case "i": {
				const but = document.getElementById("7");
				but!.click();
				break;
			}
			case "q": {
				const but = document.getElementById("8");
				but!.click();
				break;
			}
			case "s": {
				const but = document.getElementById("9");
				but!.click();
				break;
			}
			case "d": {
				const but = document.getElementById("10");
				but!.click();
				break;
			}
			case "f": {
				const but = document.getElementById("11");
				but!.click();
				break;
			}
			case "g": {
				const but = document.getElementById("12");
				but!.click();
				break;
			}
			case "h": {
				const but = document.getElementById("13");
				but!.click();
				break;
			}
			case "j": {
				const but = document.getElementById("14");
				but!.click();
				break;
			}
			case "k": {
				const but = document.getElementById("15");
				but!.click();
				break;
			}
      case "w": {
				const but = document.getElementById("16");
				but!.click();
				break;
			}
			case "x": {
				const but = document.getElementById("17");
				but!.click();
				break;
			}
			case "c": {
				const but = document.getElementById("18");
				but!.click();
				break;
			}
			case "v": {
				const but = document.getElementById("19");
				but!.click();
				break;
			}
			case "b": {
				const but = document.getElementById("20");
				but!.click();
				break;
			}
			case "n": {
				const but = document.getElementById("21");
				but!.click();
				break;
			}
			case ",": {
				const but = document.getElementById("22");
				but!.click();
				break;
			}
			case ";": {
				const but = document.getElementById("23");
				but!.click();
				break;
			}
		}
	}

	@Ref() ToolBox!: ToolBox;
	deselectInstrument() {
		//Sends deselect order to the ToolBox
		this.ToolBox.deselectInstrument();
	}

	@Ref() Launchpad!: Launchpad;
	reset() {
		//Sends reset order to Launchpad
		this.Launchpad.reset();
	}

	created() {
		window.addEventListener("keypress", event => this.clavier(event.key));
	}

}
</script>
