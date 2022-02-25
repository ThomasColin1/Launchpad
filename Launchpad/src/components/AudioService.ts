import * as Tone from 'tone'
export class AudioService{
  audio : Array<Tone.Player>;
  state : Array<number>;
  buttonNumber : number;

  constructor(buttonNumber : number){

      this.buttonNumber = buttonNumber;
      this.audio=[];
      this.state=[];
      for(let i=0;i<buttonNumber;i++){
        this.audio.push(new Tone.Player());
        this.state.push(0);
      }
  }

  public addAudio(buttonId : number, audioName : string){
    //Add audio of string in chosen button
    this.audio[buttonId] = new Tone.Player(audioName).toDestination();
    this.changeVolume(buttonId, 50);
    this.state[buttonId] = 1;
  }

  public playAudio(buttonId : number){
		// Start sound at button click
    Tone.loaded().then(() => {
	    this.audio[buttonId].start();
    });
  }


	public stopAudio(buttonId : number) {
		//Stops sounds at click on stop button
		this.audio[buttonId].stop();
	}


	public loopAudio(buttonId : number) {
		//Change loop state when click on loop
      this.audio[buttonId].loop=!this.audio[buttonId].loop;
      if(this.audio[buttonId].loop==true){
        this.state[buttonId] = 2;
      }
      else{
        this.state[buttonId] = 1;
      }
      this.audio[buttonId].autostart=!this.audio[buttonId].autostart
      this.audio[buttonId].start();

      return this.audio[buttonId].loop;
	}

  public changeVolume(buttonId : number, volume : number){
    //Volume between 0 and 100
    this.audio[buttonId].volume.value = volume/100.0*40.0-40;
  }

  public getVolume(buttonId : number){
    return this.audio[buttonId].volume;
  }

  public getState(buttonId : number){ //Returns 0 if not assigned, 1 if assigned, 2 if looped
    return this.state[buttonId];
  }

  public erase(buttonId:number){
    this.audio[buttonId] = new Tone.Player();
    this.state[buttonId] = 0;
  }

  public reset(){
    //Resets all sounds
    for(let i=0;i<this.buttonNumber;i++){
      this.audio[i].stop();
      this.audio[i] = new Tone.Player();
      this.state[i] = 0;
      this.audio[i].volume.value=-20;
    }
  }

}
