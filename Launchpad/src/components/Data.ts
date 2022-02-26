/*The data service for all components in app*/
export class Data{
  private launchpadSizeX : number;
  private launchpadSizeY : number;
  private buttonNumber : number;
  private instrumentSelected : string;

  constructor(){
    this.instrumentSelected="";
    this.launchpadSizeX=8;
    this.launchpadSizeY=8;
    this.buttonNumber=this.launchpadSizeX*this.launchpadSizeY;
  }

  reset(){
    this.instrumentSelected="";
  }


  //-------GETTERS & SETTERS-----------

  setInstrumentSelected(instrument : string){
    this.instrumentSelected = instrument;
  }

  getInstrumentSelected(){
    return this.instrumentSelected;
  }
  getLaunchpadSizeY(){
    return this.launchpadSizeY;
  }
  getLaunchpadSizeX(){
    return this.launchpadSizeX;
  }
  getButtonNumber(){
    return this.buttonNumber;
  }

}
