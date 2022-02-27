/*The service managing all the audio actions for the pads*/

import { theWindow } from 'app/../../../../Documents/GitHub/Launchpad/Launchpad/node_modules/tone/build/esm/core/context/AudioContext';
import * as Tone from 'tone'
export class AudioService{
  private audio : Array<Tone.Player>;
  private state : Array<number>;
  private recordState : Array<number>;
  private buttonNumber : number;
  private recordNumber : number;
  private numberButtonsByRecord: number;
  private records : Array<Array<Array<boolean>>>;
  private buttonClicked : Array<boolean>;
  private recordIterator : Array<number>;
  private recordLength : Array<number>;
  private waitEndRecord : boolean;

  constructor(buttonNumber : number, recordNumber : number, buttonsByRecord : number){

      this.buttonNumber = buttonNumber;
      this.recordNumber = recordNumber;
      this.numberButtonsByRecord = buttonsByRecord;
      this.audio=[];
      this.state=[];
      this.recordState=[]; //0 is none, 1 is recording, 2 is stopped, 3 is playing, 4 is waiting for recording
      this.records=[];
      this.buttonClicked=[];
      this.recordIterator=[];
      this.recordLength = [];
      this.waitEndRecord=false;

      for(let i=0;i<this.buttonNumber;i++){
        this.audio.push(new Tone.Player());
        this.state.push(0);
        this.buttonClicked[i]=false;
      }
      let array = [];
      for(let j=0;j<this.numberButtonsByRecord;j++){
        array.push([]);
      }
      for(let i=0;i<this.recordNumber;i++){
        this.recordState.push(0);
        this.recordIterator.push(0);
        this.recordLength.push(0);
        this.records.push(array);
      }

      this.startInterval(this);


  }

  //Loop for recording and playing what has been recorder
  public startInterval(self:any){
    setInterval(function() {

      for(let i=0;i<self.recordNumber;i++){

        if(self.recordState[i]==1){
          for(let j=0;j<self.numberButtonsByRecord;j++){
            self.records[i][j].push(self.buttonClicked[i*8+j])
          }
          self.recordIterator[i]++;

        }else if (self.recordState[i]==3){
          for(let j=0;j<self.numberButtonsByRecord;j++){
            if(self.records[i][j][self.recordIterator[i]]==1){
              let id=i*8+j;
              self.playAudio(id);
            }
          }
          self.recordIterator[i]++;
          if(self.recordIterator[i]>self.recordLength[i]) self.recordIterator[i]=0; //Loops
        }

        if(self.recordState[i]==4 && self.waitEndRecord==false){ //When waiting to record is finished
          self.recordState[i]=1;
          document.getElementById('Record '+i.toString())?.click();
        }
      }
      for(let i=0;i<self.buttonNumber;i++){
        self.buttonClicked[i]=false;
      }
    }, 100);
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

  public buttonClick(buttonId:number){
    this.buttonClicked[buttonId]=true;
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

  public getRecordState(recId : number){
    return this.recordState[recId];
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
    for(let i=0;i<this.recordNumber;i++){
      this.deleteRecord(i);
    }
  }

  public recordClick(idRec : number){
    //Manages the click on record

    if(this.recordState[idRec]==0){ //Not recording to recording
      if(this.waitEndRecord==false){
        this.waitEndRecord=true;
        this.recordState[idRec]=1;
      }else if(this.waitEndRecord==true){
        this.recordState[idRec]=4;
      }
    }else if (this.recordState[idRec]==1){ //Recording to stopped
        this.waitEndRecord=false;
        this.recordState[idRec]=2;
        this.recordLength[idRec]=this.recordIterator[idRec];
        this.recordIterator[idRec]=0;
    }else if (this.recordState[idRec]==2){ //stopped to playing
      this.recordState[idRec]=3;
    }else if (this.recordState[idRec]==3){ //Playing to stopped
      this.recordIterator[idRec]=0;
      this.recordState[idRec]=2;
    }
  }

  public deleteRecord(idRec: number){
    //Deletes the record of the line
    this.recordState[idRec]=0;
    this.records[idRec]=[];
    for(let i=0;i<this.numberButtonsByRecord;i++){
      this.records[idRec].push([]);
    }
    this.recordIterator[idRec]=0;
    this.recordLength[idRec]=0;
  }

}
