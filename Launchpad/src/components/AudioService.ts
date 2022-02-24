export class AudioService{
  audio : any;
  buttonNumber : number;

  constructor(buttonNumber : number){

      this.buttonNumber = buttonNumber;
      this.audio=[];
      for(let i=0;i<buttonNumber;i++){
        this.audio.push(new Audio());
      }
  }

  public addAudio(buttonId : number, audioName : string){
    //Add audio of string in chosen button
    console.log("ENTERED ADD");
    this.audio[buttonId]=new Audio(audioName);
    this.audio[buttonId].volume = 0.5;
  }

  public playAudio(buttonId : number){
		// Start sound at button click
		console.log("play " + buttonId);
		this.audio[buttonId].currentTime = 0;
		this.audio[buttonId].play();
  }


	public stopAudio(buttonId : number) {
		//Stops sounds at click on stop button
		this.audio[buttonId].pause();
	}


	public loopAudio(buttonId : number) {
		//Change loop state when click on loop
		this.audio[buttonId].play();
		this.audio[buttonId].loop = !this.audio[buttonId].loop;
    return this.audio[buttonId].loop;
	}

  public changeVolume(buttonId : number, volume : number){
    //Volume between 0 and 100
    this.audio[buttonId].volume = volume / 100.0;
  }

  public getVolume(buttonId : number){
    return this.audio[buttonId].volume;
  }

  public reset(){
    //Resets all sounds
    for(let i=0;i<this.buttonNumber;i++){
      this.audio[i].pause();
      this.audio[i] = new Audio();
    }
  }

}
